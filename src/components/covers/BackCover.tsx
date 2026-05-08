'use client';
import styles from '@/styles/pages.module.css';

export function BackCoverLeft() {
  const contactItems = [
    { icon: '✉️', label: 'djouairia@email.com',       href: 'abdellaoui.djouairia@gmail.com' },
    { icon: '🔗', label: 'linkedin.com/in/djouairia', href: 'https://www.linkedin.com/in/abdellaoui-djouairia-8bb069300/' },
    { icon: '🐙', label: 'github.com/djouairia',      href: 'https://github.com/Djouriabd' },
  ];

  return (
    <div
      className={styles.backCoverLeft}
      style={{ height: '100%', borderRadius: '4px 0 0 4px', padding: '2.5rem 2.5rem 2.5rem 3rem' }}
    >

      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top label */}
        <div style={{
          fontFamily: 'var(--font-comfortaa)',
          fontSize: '0.58rem',
          letterSpacing: '0.45em',
          color: 'rgba(244,241,226,0.4)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          Get in Touch
        </div>

        <h2 className={styles.hireTitle} style={{ fontSize: 'clamp(2.8rem, 8vw, 4rem)' }}>
          Hire<br />Me.
        </h2>

        <div style={{ width: '40px', height: '2px', background: 'rgba(244,241,226,0.3)', borderRadius: '1px', margin: '1.5rem 0' }} />

        <p className={styles.hireSubtitle}>
          Let&apos;s create something beautiful together.
          Available for freelance projects &amp; full-time roles.
        </p>

        <div className={styles.contactLinks} style={{ marginTop: '2rem' }}>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.contactLink}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              <span className={styles.contactIcon}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom flourish */}
        <div style={{ marginTop: 'auto' }}>
          <svg width="70" height="26" viewBox="0 0 70 26" fill="none" style={{ opacity: 0.25 }}>
            <path d="M4 13 Q17 4 35 13 Q53 22 66 13" stroke="rgba(244,241,226,1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{
            fontFamily: 'var(--font-comfortaa)',
            fontSize: '0.55rem',
            color: 'rgba(244,241,226,0.3)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '0.5rem',
          }}>— End of Portfolio —</p>
        </div>
      </div>
    </div>
  );
}

export function BackCoverRight() {
  return (
    <div className={styles.backCoverRight} style={{ height: '100%' }}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{ fontFamily: 'var(--font-anton)', fontSize: '4rem', color: 'rgba(244,241,226,0.15)', lineHeight: 1, userSelect: 'none' }}>
          ✦
        </div>
        <div style={{ fontFamily: 'var(--font-comfortaa)', fontSize: '0.75rem', color: 'rgba(244,241,226,0.7)', textAlign: 'center', lineHeight: 1.8, letterSpacing: '0.08em', maxWidth: '200px' }}>
          &ldquo;Design is where science<br />and art break even.&rdquo;
        </div>
      </div>
    </div>
  );
}
