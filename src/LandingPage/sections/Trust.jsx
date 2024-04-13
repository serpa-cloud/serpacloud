// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import ine from '../assets/ine.png';
import gcp from '../assets/gcp.png';
import aws from '../assets/aws.png';
import nixtla from '../assets/nixtla.png';
import banorte from '../assets/banorte.png';
import walmart from '../assets/walmart.png';

const styles = stylex.create({
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  trustSection: {
    marginTop: 40,
    '@media (max-width: 660px)': {
      marginTop: 24,
    },
  },
  trustedTitle: {
    color: 'var(--neutral-color-800)',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
    fontSize: 28,
    paddingBottom: 40,
    textAlign: 'center',
    fontWeight: 300,
    letterSpacing: '.4em',
    lineHeight: '1.25',
    fontVariant: 'small-caps',
    paddingLeft: 24,
    paddingRight: 24,

    '@media (max-width: 800px)': {
      fontSize: 24,
    },
    '@media (max-width: 660px)': {
      fontSize: 20,
    },
    '@media (max-width: 360px)': {
      fontSize: 16,
    },
  },
  mainContent: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoGrid: {
    display: 'grid',
    width: '100%',
    rowGap: 24,
    gridTemplateColumns: '1fr 1fr 1fr',
    '@media (max-width: 860px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  logoImage: {
    width: '100%',
    opacity: 0.65,
    objectFit: 'contain',
    objectPosition: 'center center',
    '@media (max-width: 860px)': {
      width: '75%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  logoContainer: {
    height: 72,
    display: 'flex',
    alignItems: 'center',
  },
  trustedGradient: {
    color: 'var(--neutral-color-600)',
    opacity: 0.85,
  },
  subcard: {
    padding: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-1)',
    '@media (max-width: 860px)': {
      padding: 24,
    },
  },
  subcardTrusted: {
    position: 'relative',
    zIndex: 1,
  },
});

function Trust(): React$Node {
  return (
    <section className={stylex(styles.trustSection)}>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.mainContent)}>
          <h2 className={stylex(styles.trustedTitle)}>
            <span className={stylex(styles.trustedGradient)}>trusted by +2,000 developers</span>
          </h2>

          <div className={stylex(styles.subcard, styles.subcardTrusted)}>
            <div className={stylex(styles.logoGrid)}>
              <div className={stylex(styles.logoContainer)}>
                <img src={walmart} alt="Walmart" height={40} className={stylex(styles.logoImage)} />
              </div>

              <div className={stylex(styles.logoContainer)}>
                <img
                  src={gcp}
                  alt="Google Cloud"
                  height={32}
                  className={stylex(styles.logoImage)}
                />
              </div>

              <div className={stylex(styles.logoContainer)}>
                <img src={nixtla} alt="Nixtla" height={24} className={stylex(styles.logoImage)} />
              </div>

              <div className={stylex(styles.logoContainer)}>
                <img src={banorte} alt="Banorte" height={24} className={stylex(styles.logoImage)} />
              </div>

              <div className={stylex(styles.logoContainer)}>
                <img src={aws} alt="AWS" height={40} className={stylex(styles.logoImage)} />
              </div>

              <div className={stylex(styles.logoContainer)}>
                <img src={ine} alt="INE" height={36} className={stylex(styles.logoImage)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Trust): React$AbstractComponent<{}, mixed>);
