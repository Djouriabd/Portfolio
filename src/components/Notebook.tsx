'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/notebook.module.css';
import RingSpine from '@/components/ui/RingSpine';

// Cover pages
import { FrontCoverLeft, FrontCoverRight } from '@/components/covers/FrontCover';
import { BackCoverLeft, BackCoverRight } from '@/components/covers/BackCover';

// Inner pages
import { AboutLeft, AboutRight } from '@/components/pages/AboutPage';
import { ProjectsLeft, ProjectsRight } from '@/components/pages/ProjectsPage';
import { ExperienceLeft, ExperienceRight } from '@/components/pages/ExperiencePage';
import { ToolsLeft, ToolsRight } from '@/components/pages/ToolsPage';
import { ThoughtsLeft, ThoughtsRight } from '@/components/pages/ThoughtsPage';

// Project data
import { projectsPage1, projectsPage2 } from '@/data/projects';

// Tab colors — one per spread
const TAB_COLORS = [
  '#5B8FA8', '#7BAD6E', '#C4876A', '#9B7BB8',
  '#C47A7A', '#8FA87B', '#A87B8F', '#6A9B8A', '#B89A5B',
];

interface Spread {
  id: string;
  label: string;
  left: React.ReactNode;
  right: React.ReactNode;
  isCoverSpread?: boolean;  // true = render as closed book
}

function buildSpreads(): Spread[] {
  return [
    {
      id: 'cover',
      label: 'Cover',
      isCoverSpread: true,
      left:  <FrontCoverLeft />,
      right: <FrontCoverRight />,
    },
    {
      id: 'about',
      label: 'About',
      left:  <AboutLeft />,
      right: <AboutRight />,
    },
    {
      id: 'projects-1',
      label: 'Work 1',
      left:  <ProjectsLeft pageNum={2} spreadNum={1} />,
      right: <ProjectsRight projects={projectsPage1} />,
    },
    {
      id: 'projects-2',
      label: 'Work 2',
      left:  <ProjectsLeft pageNum={3} spreadNum={2} />,
      right: <ProjectsRight projects={projectsPage2} />,
    },

    {
      id: 'experience',
      label: 'XP',
      left:  <ExperienceLeft />,
      right: <ExperienceRight />,
    },
    {
      id: 'tools',
      label: 'Tools',
      left:  <ToolsLeft />,
      right: <ToolsRight />,
    },
    {
      id: 'thoughts',
      label: 'Notes',
      left:  <ThoughtsLeft />,
      right: <ThoughtsRight />,
    },
    {
      id: 'back-cover',
      label: 'Contact',
      isCoverSpread: true,
      left:  <BackCoverLeft />,
      right: <BackCoverRight />,
    },
  ];
}

// Closed spine screws
const SCREW_COUNT = 8;

export default function Notebook() {
  const spreads = buildSpreads();
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    if (index < 0 || index >= spreads.length) return;
    setCurrent(index);
    // On mobile stack, scroll back to top when switching spreads
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [current, spreads.length]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);


  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const spread = spreads[current];
  const isCoverSpread = !!spread.isCoverSpread;
  const isFirstSpread = current === 0;
  const isLastSpread  = current === spreads.length - 1;

  // ─────────────────────────────────────────────────────────
  // CLOSED BOOK — front cover or back cover
  // ─────────────────────────────────────────────────────────
  if (isCoverSpread) {
    // Front cover shows the LEFT component as the cover face
    // Back cover shows the LEFT component as the cover face
    const coverContent = isFirstSpread ? spread.left : spread.right;


    return (
      <div className={styles.desk}>
        <div className={styles.closedBook}>

          {/* Left-side spine strip with screws */}
          <div className={styles.closedSpineStrip}>
            {Array.from({ length: SCREW_COUNT }).map((_, i) => (
              <div key={i} className={styles.closedScrew} />
            ))}
          </div>

          {/* Cover face — full height */}
          <div
            className={styles.closedCover}
            onClick={isFirstSpread ? next : prev}
            style={{ cursor: 'pointer' }}
          >
            {coverContent}

          </div>

          {/* LEFT-side tabs sticking out */}
          <div className={styles.closedTabs}>
            {spreads.map((s, i) => (
              <div
                key={s.id}
                className={`${styles.closedTab} ${i === current ? styles.activeTab : ''}`}
                style={{ background: TAB_COLORS[i % TAB_COLORS.length] }}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                title={s.label}
              >
                <span className={styles.closedTabLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.keyHint}>← → Arrow keys or click tabs to navigate</div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────
  // OPEN BOOK — all inner spreads
  // ─────────────────────────────────────────────────────────

  return (
    <div className={styles.desk}>
      <div className={styles.book}>

        {/* Left page */}
        <div
          className={styles.leftPage}
          onClick={prev}
        >
          {spread.left}
        </div>

        {/* Chrome screw spine — always on top */}
        <RingSpine />

        {/* Right page */}
        <div
          className={styles.rightPage}
          onClick={next}
        >
          {spread.right}
        </div>

        {/* Navigation arrows (show on hover) */}
        {!isFirstSpread && (
          <div
            className={`${styles.navArea} ${styles.navLeft}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            title="Previous page"
          >
            <div className={styles.navArrow}>←</div>
          </div>
        )}
        {!isLastSpread && (
          <div
            className={`${styles.navArea} ${styles.navRight}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            title="Next page"
          >
            <div className={styles.navArrow}>→</div>
          </div>
        )}

        {/* Tab dividers — LEFT edge (matching video) */}
        <div className={styles.tabs}>
          {spreads.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.tab} ${i === current ? styles.activeTab : ''}`}
              style={{ background: TAB_COLORS[i % TAB_COLORS.length] }}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              title={s.label}
            >
              <span className={styles.tabLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Page counter */}
        <div className={styles.pageCounter}>
          {current} / {spreads.length - 2}
        </div>
      </div>

      <div className={styles.keyHint}>← → Arrow keys to navigate</div>
    </div>
  );
}
