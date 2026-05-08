'use client';
import styles from '@/styles/pages.module.css';
import StickyNote from '@/components/ui/StickyNote';

// About — Left page (title + bio)
export function AboutLeft() {
  return (
    <div className={styles.pageContent}>
      <span className={styles.pageNumber}>№ 1</span>
      <span className={styles.sectionBadge}>About Me</span>

      <h2 className={styles.pageTitle}>Hi, I&apos;m<br />Djouairia</h2>
      <div className={styles.divider} />

      <p className={styles.pageSubtitle}>
        A passionate creative designer from Algeria — blending visual design,
        frontend engineering, and storytelling through creativity.
      </p>

      <p className={styles.aboutBio}>
        I craft experiences that live at the intersection of aesthetics and
        function. Whether it&apos;s a brand identity, a web interface, or a
        video that tells a story — I bring the same obsession for detail and
        intention to every pixel and frame.
      </p>

      <div className={styles.aboutTags}>
        {['UI/UX Design', 'Graphic Design', 'Frontend Dev', 'Video Editing', 'Branding'].map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>

      <p className={styles.aboutSignature}>Djouri -</p>
    </div>
  );
}

// About — Right page (sticky note facts + photo placeholder)
export function AboutRight() {
  return (
    <div className={styles.rightPageContent}>
      <div className={styles.pinsBoard}>
        {/* Photo placeholder */}
        <div style={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: '55%',
          aspectRatio: '3/4',
          background: 'white, linear-gradient(145deg, var(--color-paper-dark), var(--color-blue-light))',
          boxShadow: '3px 3px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          transform: 'rotate(-2deg)',
          padding: '0.5rem 0.5rem 2rem',
        }}>
          
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, #D4C9B8, #A8B8C8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3.5rem',
          }}>
          <img src="/images/image.svg" alt="Djouri" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Sticky note — location */}
        <StickyNote
          color="yellow"
          rotation={3}
          title="📍 Location"
          style={{ position: 'absolute', top: '10%', right: '4%', width: '140px', fontSize: '0.68rem' }}
        >
          Algeria 🇩🇿 <br />Tipaza<br />Available remotely
        </StickyNote>

        {/* Sticky note — years of experience */}
        <StickyNote
          color="blue"
          rotation={-2}
          title="⏱ Experience"
          style={{ position: 'absolute', top: '40%', right: '2%', width: '140px' }}
        >
          2+ years creating<br />digital experiences
        </StickyNote>

        {/* Sticky note — fun fact */}
        <StickyNote
          color="pink"
          rotation={2}
          title="✨ About Me"
          style={{ position: 'absolute', bottom: '12%', left: '8%', width: '160px' }}
          isHandwritten
        >
          I can&apos;t resist<br />a good font pairing.
        </StickyNote>

        {/* Sticky note — languages */}
        <StickyNote
          color="green"
          rotation={-1.5}
          title="🌐 Languages"
          style={{ position: 'absolute', bottom: '8%', right: '5%', width: '130px' }}
        >
          Arabic · French<br />English
        </StickyNote>
      </div>
    </div>
  );
}
