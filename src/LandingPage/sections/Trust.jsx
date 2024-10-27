// @flow
import { memo, useEffect, useRef } from 'react';
import styles from './Trust.module.css';

import ine from '../assets/ine.png';
import gcp from '../assets/gcp.png';
import aws from '../assets/aws.png';
import nixtla from '../assets/nixtla.png';
import banorte from '../assets/banorte.png';
import walmart from '../assets/walmart.png';

function Trust(): React$Node {
  const logoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    logoRefs.current.forEach((logo) => {
      if (logo) observer.observe(logo);
    });

    return () => {
      logoRefs.current.forEach((logo) => {
        if (logo) observer.unobserve(logo);
      });
    };
  }, []);

  return (
    <section className={styles.trustSection}>
      <div className={styles.centered}>
        <div className={styles.mainContent}>
          <div className={styles.logoGrid}>
            {[walmart, gcp, nixtla, banorte, aws, ine].map((logo, index) => (
              <div key={index} className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="Logo"
                  height={
                    logo === gcp
                      ? 32
                      : logo === nixtla
                      ? 24
                      : logo === banorte
                      ? 24
                      : logo === ine
                      ? 36
                      : 40
                  }
                  className={styles.logoImage}
                  ref={(el) => (logoRefs.current[index] = el)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Trust): React$AbstractComponent<{}, mixed>);
