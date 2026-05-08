'use client';
import styles from '@/styles/pages.module.css';
import PhotoPin from '@/components/ui/PhotoPin';
import { Project } from '@/data/projects';

interface ProjectsPageProps {
  pageNum: number;      // 2, 3, or 4
  spreadNum: number;    // 1-based display number
  projects: Project[];
  totalPages?: number;
}

// Left page — title + description
export function ProjectsLeft({ pageNum, spreadNum, totalPages = 2 }: { pageNum: number; spreadNum: number; totalPages?: number }) {
  return (
    <div className={styles.pageContent}>
      <span className={styles.pageNumber}>№ {pageNum} · Projects {spreadNum}/{totalPages}</span>
      <span className={styles.sectionBadge}>My Work</span>

      <h2 className={styles.pageTitle}>
        {spreadNum === 1 && 'Selected\nWork'}
        {spreadNum === 2 && 'More\nProjects'}
      </h2>
      <div className={styles.divider} />

      <p className={styles.pageSubtitle}>
        {spreadNum === 1 &&
          'A curated selection of projects across branding, UI/UX and web development.'}
        {spreadNum === 2 &&
          'From interactive web experiences to visual identities — each project tells a unique story.'}
      </p>

      <div style={{ marginTop: 'auto', paddingBottom: '0.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-comfortaa)',
          fontSize: '0.65rem',
          color: 'var(--color-blue)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          ← Click a pin to visit →
        </p>
      </div>
    </div>
  );
}

// Right page — project photo pins
export function ProjectsRight({ projects }: { projects: Project[] }) {
  // Predefined positions for up to 4 pins
  const positions: React.CSSProperties[] = [
    { top: '4%',  left: '4%',  width: '44%' },
    { top: '4%',  right: '4%', width: '44%' },
    { bottom: '4%', left: '4%',  width: '44%' },
    { bottom: '4%', right: '4%', width: '44%' },
  ];

  return (
    <div className={styles.rightPageContent}>
      <div className={styles.pinsBoard}>
        {projects.map((proj, i) => (
          <PhotoPin
            key={proj.id}
            project={proj}
            style={{ ...positions[i % positions.length] }}
          />
        ))}
      </div>
    </div>
  );
}
