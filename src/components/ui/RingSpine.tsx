'use client';
import styles from '@/styles/notebook.module.css';

const RING_COUNT = 7;

export default function RingSpine() {
  return (
    <div className={styles.chromeSpine} aria-hidden="true">
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <div key={i} className={styles.ringAssembly}>
          <div className={styles.screwLeft} />
          <div className={styles.ringBridge} />
          <div className={styles.screwRight} />
        </div>
      ))}
    </div>
  );
}
