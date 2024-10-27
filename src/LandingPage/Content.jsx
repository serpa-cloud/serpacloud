// @flow
import stylex from '@serpa-cloud/stylex';
import { useRef, useEffect, memo } from 'react';

import Header from './Header';
import HeroCard from './HeroCard';

import Hero from './sections/Hero';
import Quotes from './sections/Quotes';
import Footer from './sections/Footer';
import Features from './sections/Features';
import Waitinglist from '../Waitinglist';

const styles = stylex.create({
  main: {
    width: '100vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    paddingTop: 56,
  },

  heroImageContainer: {
    width: '100%',
    maxWidth: 480,
    paddingTop: 24,
    paddingBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

    aspectRatio: '1.09',
    '@media (max-width: 860px)': {
      maxWidth: 360,
      paddingTop: 24,
    },
    '@media (max-width: 580px)': {
      maxWidth: 200,
    },
  },
  heroImage: {
    width: '100%',
  },
  trustedContainer: {
    zIndex: 2,
    position: 'relative',
  },
  section: {
    marginTop: 80,
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderLeft: '1px solid var(--neutral-color-400)',
    borderRight: '1px solid var(--neutral-color-400)',
    '@media (max-width: 440px)': {
      marginTop: 0,
    },
  },
  intermediate: {
    height: 80,
    borderBottom: '1px solid var(--neutral-color-400)',
  },
});

function Content(): React$Node {
  return (
    <div>
      <div className={stylex(styles.main)} id="landingScrollElement">
        <Header />
        <Hero />
        <div className={stylex(styles.section)}>
          <Features />
          <div className={stylex(styles.intermediate)} />
          <Quotes />
          <div className={stylex(styles.intermediate)} />
          <div id="waitinglist">
            <Waitinglist />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
