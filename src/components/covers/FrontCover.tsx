'use client';
import styles from '@/styles/pages.module.css';

// Front Cover — used as the single CLOSED book face
export function FrontCoverLeft() {
  return (
    <div
      className={styles.coverLeft}
      style={{ height: '100%', borderRadius: '4px 0 0 4px', padding: '2.5rem 2.5rem 2.5rem 3rem' }}
    >
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top label */}
        <div style={{
          fontFamily: 'var(--font-comfortaa)',
          fontSize: '0.58rem',
          letterSpacing: '0.45em',
          color: 'rgba(244,241,226,0.45)',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          <hr style={{ width: '100%', margin: '0 0 2rem 0', color: 'rgba(244,241,226,0.45)', border: '1px solid rgba(244,241,226,0.45)' }} />
        </div>

        {/* Main title */}
        <h1 className={styles.coverTitle} style={{ fontSize: 'clamp(2.8rem, 8vw, 4rem)' }}>
          PORT<br />FOLIO
        </h1>

        {/* Welcome */}
        <p className={styles.coverWelcome} style={{ marginTop: '1rem' }}>
         Welcome —
        </p>

        {/* Horizontal rule */}
        <div style={{
          width: '40px', height: '2px',
          background: 'rgba(244,241,226,0.25)',
          borderRadius: '1px',
          margin: '2rem 0',
        }} />

        {/* Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {['UI/UX Designer', 'Graphic Designer', 'Frontend Developer', 'Video Editor'].map((r) => (
            <div key={r} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-comfortaa)',
              fontSize: '0.68rem',
              color: 'rgba(244,241,226,0.55)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}>
              <span style={{ width: '12px', height: '1px', background: 'rgba(244,241,226,0.3)', display: 'inline-block', flexShrink: 0 }} />
              {r}
            </div>
          ))}
        </div>

        {/* Name + year at the bottom */}
        <div style={{ marginTop: 'auto' }}>
          <p className={styles.coverName} style={{ fontSize: '0.95rem' }}>Djouairia Abdellaoui</p>
          <p className={styles.coverRole}>AKA. Djouri</p>
        </div>
      </div>
    </div>
  );
}

// Not used in closed mode, kept for compatibility
export function FrontCoverRight() {
  return (
    <div className={styles.coverRight} style={{ height: '100%' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '12rem',
          lineHeight: 1,
          color: 'rgba(244,241,226,0.08)',
          userSelect: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          D
        </div>
      </div>
    </div>
  );
}
