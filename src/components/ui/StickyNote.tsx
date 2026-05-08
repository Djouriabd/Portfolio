'use client';
import styles from '@/styles/components.module.css';

interface StickyNoteProps {
  color?: 'yellow' | 'green' | 'pink' | 'blue';
  rotation?: number;
  title?: string;
  children: React.ReactNode;
  isHandwritten?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function StickyNote({
  color = 'yellow',
  rotation = 0,
  title,
  children,
  isHandwritten,
  style,
  className,
}: StickyNoteProps) {
  return (
    <div
      className={`${styles.stickyNote} ${styles[color]} ${className ?? ''}`}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      {title && <span className={styles.stickyTitle}>{title}</span>}
      <span className={isHandwritten ? styles.stickyHandwritten : ''}>
        {children}
      </span>
    </div>
  );
}
