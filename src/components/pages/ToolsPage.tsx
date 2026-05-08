'use client';
import styles from '@/styles/pages.module.css';
import compStyles from '@/styles/components.module.css';
import { tools } from '@/data/tools';

const categoryLabel: Record<string, string> = {
  design: '🎨 Design',
  development: '💻 Development',
  video: '🎬 Video',
  other: '🔧 Other',
};

// Left page — title + category list
export function ToolsLeft() {
  const categories = ['design', 'development', 'video', 'other'];

  return (
    <div className={styles.pageContent}>
      <span className={styles.pageNumber}>№ 5</span>
      <span className={styles.sectionBadge}>Tools & Stack</span>

      <h2 className={styles.pageTitle}>My<br />Toolkit</h2>
      <div className={styles.divider} />

      <p className={styles.pageSubtitle}>
        The tools and technologies I use to bring ideas to life — from wireframes to final delivery.
      </p>

      <div style={{ marginTop: '1.2rem' }}>
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat);
          return (
            <div key={cat} className={styles.toolCategory}>
              <p className={styles.toolCategoryTitle}>{categoryLabel[cat]}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {catTools.map((tool) => (
                  <span key={tool.id} style={{
                    fontFamily: 'var(--font-comfortaa)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    background: 'var(--color-paper-dark)',
                    border: '1px solid rgba(81,50,41,0.15)',
                    borderRadius: '2px',
                    padding: '2px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <span>{tool.icon}</span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Right page — sticky note tool cards
export function ToolsRight() {
  // Scattered positions for sticky notes
  const positions: { top?: string; bottom?: string; left?: string; right?: string; width: string }[] = [
    { top: '5%',  left: '5%',   width: '42%' },
    { top: '5%',  right: '4%',  width: '42%' },
    { top: '38%', left: '10%',  width: '30%' },
    { top: '38%', right: '8%',  width: '34%' },
    { top: '62%', left: '4%',   width: '40%' },
    { top: '62%', right: '10%', width: '40%' },
  ];

  const categories = ['design', 'development', 'video', 'other'];
  const colorMap: Record<string, 'yellow' | 'green' | 'pink' | 'blue'> = {
    design: 'yellow', development: 'blue', video: 'pink', other: 'green',
  };

  return (
    <div className={styles.rightPageContent}>
      <div className={styles.pinsBoard}>
        {categories.map((cat, ci) => {
          const catTools = tools.filter((t) => t.category === cat);
          const pos = positions[ci] ?? positions[0];
          const color = colorMap[cat];

          return (
            <div
              key={cat}
              style={{
                position: 'absolute',
                ...pos,
                background: color === 'yellow' ? 'var(--color-sticky-yellow)'
                  : color === 'green' ? 'var(--color-sticky-green)'
                  : color === 'pink' ? 'var(--color-sticky-pink)'
                  : 'var(--color-sticky-blue)',
                padding: '1rem 0.8rem 0.8rem',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.15)',
                transform: `rotate(${ci % 2 === 0 ? -1.5 : 1.5}deg)`,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'rotate(0deg) scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '4px 6px 16px rgba(0,0,0,0.22)';
                (e.currentTarget as HTMLDivElement).style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = `rotate(${ci % 2 === 0 ? -1.5 : 1.5}deg) scale(1)`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = '2px 2px 8px rgba(0,0,0,0.15)';
                (e.currentTarget as HTMLDivElement).style.zIndex = 'auto';
              }}
            >
              {/* Tape strip */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '36px',
                height: '14px',
                background: 'rgba(252,230,183,0.7)',
                borderRadius: '1px',
              }} />
              <p style={{
                fontFamily: 'var(--font-comfortaa)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                marginBottom: '0.5rem',
                opacity: 0.7,
              }}>
                {categoryLabel[cat]}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {catTools.map((t) => (
                  <span key={t.id} style={{
                    fontFamily: 'var(--font-comfortaa)',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '2px',
                    padding: '2px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                  }}>
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
