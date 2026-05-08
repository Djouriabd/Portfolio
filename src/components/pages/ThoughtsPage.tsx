'use client';
import styles from '@/styles/pages.module.css';
import StickyNote from '@/components/ui/StickyNote';
import { thoughts } from '@/data/thoughts';

// Left page — title + first two thoughts as text
export function ThoughtsLeft() {
  return (
    <div className={styles.pageContent}>
      <span className={styles.pageNumber}>№ 6</span>
      <span className={styles.sectionBadge}>My Thoughts</span>

      <h2 className={styles.pageTitle}>Notes &amp;<br />Reflections</h2>
      <div className={styles.divider} />

      <p className={styles.pageSubtitle}>
        Random thoughts on design, craft and creativity — jotted down between projects.
      </p>

      {/* Show first 2 thoughts as timeline-style entries */}
      <div style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1, overflow: 'hidden' }}>
        {thoughts.slice(0, 2).map((t) => (
          <div key={t.id} style={{ borderLeft: '2px solid var(--color-blue-light)', paddingLeft: '0.8rem' }}>
            {t.quote && (
              <p style={{
                fontFamily: 'var(--font-anton)',
                fontSize: '0.9rem',
                color: 'var(--color-text)',
                lineHeight: 1.3,
                marginBottom: '0.4rem',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            )}
            <p style={{
              fontFamily: 'var(--font-comfortaa)',
              fontSize: '0.72rem',
              color: 'var(--color-text-light)',
              lineHeight: 1.65,
            }}>
              {t.body}
            </p>
            {t.date && (
              <p style={{
                fontFamily: 'var(--font-comfortaa)',
                fontSize: '0.6rem',
                color: 'var(--color-blue)',
                fontWeight: 700,
                marginTop: '0.4rem',
                letterSpacing: '0.1em',
              }}>
                — {t.date}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Little handwritten note at bottom */}
      <p style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontSize: '0.8rem',
        color: 'var(--color-text-light)',
        opacity: 0.5,
        marginTop: 'auto',
        paddingTop: '0.8rem',
      }}>
        — to be continued...
      </p>
    </div>
  );
}

// Right page — sticky note thoughts scattered
export function ThoughtsRight() {
  const positions: React.CSSProperties[] = [
    { top: '8%',  left: '4%',  width: '55%' },
    { top: '6%',  right: '3%', width: '38%' },
    { top: '42%', left: '12%', width: '50%' },
    { bottom: '8%', right: '4%', width: '48%' },
  ];

  return (
    <div className={styles.rightPageContent}>
      <div className={styles.pinsBoard}>
        {thoughts.map((thought, i) => (
          <StickyNote
            key={thought.id}
            color={thought.stickyColor ?? 'yellow'}
            rotation={thought.rotation ?? 0}
            title={thought.title}
            isHandwritten={thought.isHandwritten}
            style={{ position: 'absolute', ...positions[i % positions.length] }}
          >
            {thought.quote ? `"${thought.quote}"` : thought.body}
          </StickyNote>
        ))}

        {/* Decorative film strip */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '4%',
          display: 'flex',
          gap: '3px',
          opacity: 0.15,
        }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{
              width: '28px',
              height: '40px',
              background: 'var(--color-text)',
              border: '2px solid var(--color-text)',
              borderRadius: '1px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '3px', left: '3px', right: '3px', bottom: '3px',
                background: 'var(--color-paper-dark)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
