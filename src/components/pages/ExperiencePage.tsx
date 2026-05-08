'use client';
import styles from '@/styles/pages.module.css';
import { experience, ExperienceItem } from '@/data/experience';

const typeIcon: Record<ExperienceItem['type'], string> = {
  work: '💼',
  education: '🎓',
  freelance: '✦',
};

// Left page — title + timeline
export function ExperienceLeft() {
  return (
    <div className={styles.pageContent}>
      <span className={styles.pageNumber}>№ 4</span>
      <span className={styles.sectionBadge}>Experience</span>

      <h2 className={styles.pageTitle}>My<br />Journey</h2>
      <div className={styles.divider} />

      <div className={styles.timeline}>
        {experience.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div>
              <p className={styles.timelinePeriod}>
                {typeIcon[item.type]} {item.period}
              </p>
              <p className={styles.timelineTitle}>{item.title}</p>
              <p className={styles.timelineCompany}>{item.company}</p>
              <p className={styles.timelineDesc}>{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className={styles.timelineBullets}>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Right page — visual decoration
export function ExperienceRight() {
  return (
    <div className={styles.rightPageContent}>
      <div style={{ position: 'relative', height: '100%' }}>

        {/* Big decorative quote */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          right: '8%',
          fontFamily: 'var(--font-anton)',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: 'var(--color-text)',
          lineHeight: 1.3,
          opacity: 0.2,
          userSelect: 'none',
        }}>
          &ldquo;Experience is the teacher of all things.&rdquo;
        </div>

        {/* Timeline visual bars */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          right: '10%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}>
          {experience.map((item, i) => (
            <div key={item.id}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.3rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                }}>
                  {item.title.split(' ').slice(0, 2).join(' ')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.6rem',
                  color: 'var(--color-blue)',
                }}>
                  {item.period}
                </span>
              </div>
              <div style={{
                height: '6px',
                background: 'var(--color-paper-dark)',
                borderRadius: '3px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${item.progress ?? (85 - i * 12)}%`,
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, var(--color-blue), var(--color-blue-light))'
                    : 'linear-gradient(90deg, var(--color-text-light), var(--color-text))',
                  borderRadius: '3px',
                  opacity: 0.7,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom stamp */}
        <div style={{
          position: 'absolute',
          bottom: '8%',
          right: '8%',
          border: '2px solid var(--color-text)',
          opacity: 0.12,
          padding: '0.6rem 1.2rem',
          fontFamily: 'var(--font-anton)',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          color: 'var(--color-text)',
          transform: 'rotate(-5deg)',
          userSelect: 'none',
        }}>
          SINCE 2023
        </div>
      </div>
    </div>
  );
}
