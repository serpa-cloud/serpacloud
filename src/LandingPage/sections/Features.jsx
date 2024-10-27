// @flow

import { memo } from 'react';
import styles from './Features.module.scss';

function Features(): React$Node {
  return (
    <section className={`${styles.container} ${styles.centered}`}>
      <div className={styles.leftSpace}>
        <h2 className={styles.title}>
          <span className={styles.gradientText}>Create, deliver and run</span>
        </h2>
        <h3 className={styles.subtitle}>All in one ecosystem</h3>
        <p className={styles.description}>
          Whether you're a large engineering team, a developer, or a founder building a product.
          Serpa CodeGen AI gives you access to program 20x faster, allowing you to build more and
          better in a short time.
        </p>
        <div>
          <a href="https://app.serpa.cloud/session/signup" className={styles.secondaryButton}>
            Request Access
          </a>
        </div>
      </div>
      <div className={styles.rightSpace}>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Easy</h4>
          <p className={styles.blockDescription}>
            Start new projects from scratch, regardless of your experience level.
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Fast</h4>
          <p className={styles.blockDescription}>
            Create or fix new features in existing projects 20x faster.
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Powerful</h4>
          <p className={styles.blockDescription}>
            "Work on one or multiple projects at the same time, without the need to provide context.
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Robust Ecosystem</h4>
          <p className={styles.blockDescription}>
            Upload to Github, AWS, GCP or Serpa Cloud automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Features): React$AbstractComponent<{}, mixed>);
