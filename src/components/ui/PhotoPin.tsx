'use client';
import styles from '@/styles/components.module.css';
import { Project } from '@/data/projects';

interface PhotoPinProps {
  project: Project;
  style?: React.CSSProperties;
}

export default function PhotoPin({ project, style }: PhotoPinProps) {
  const colorMap: Record<string, string> = {
    yellow: 'var(--color-sticky-yellow)',
    green:  'var(--color-sticky-green)',
    pink:   'var(--color-sticky-pink)',
    blue:   'var(--color-sticky-blue)',
  };

  return (
    <a
      href={project.link ?? '#'}
      target={project.link && project.link !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={styles.pinCard}
      style={{
        transform: `rotate(${project.rotation ?? 0}deg)`,
        ...style,
      }}
      title={project.title}
    >
      <div
        className={styles.pinPlaceholder}
        style={{ background: project.imageColor ?? colorMap[project.stickyColor ?? 'yellow'] }}
      >
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ) : (
          '🖼️'
        )}
      </div>
      <div className={styles.pinBody}>
        <span className={styles.pinTitle}>{project.title}</span>
        <span className={styles.pinDesc}>{project.description}</span>
        <div className={styles.pinTags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.pinTag}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
