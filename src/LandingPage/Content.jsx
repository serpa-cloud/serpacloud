// @flow
import stylex from '@serpa-cloud/stylex';
import { useRef, useEffect, memo } from 'react';
import { useSpring, animated } from 'react-spring';

import Header from './Header';
import HeroCard from './HeroCard';

import Hero from './sections/Hero';

import calabi from './assets/calabi.png';
import Languages from './sections/Languages';
import Quotes from './sections/Quotes';
import Footer from './sections/Footer';
import KubernetesMap from './sections/KubernetesMap';
import Enterprise from './sections/Enterprise';

const styles = stylex.create({
  main: {
    width: '100vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    paddingTop: 56,
    maxWidth: 1200,
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
    '@media (max-width: 440px)': {
      marginTop: 0,
    },
  },
});

function Content(): React$Node {
  const [calabiStyles, animateCalabi] = useSpring(
    () => ({
      y: 0,
      opacity: 1,
    }),
    [],
  );

  const scheduledAnimationFrame = useRef<boolean>(false);

  useEffect(() => {
    function handler() {
      const scrollTop = window?.scrollY ?? 0;

      if (scrollTop < 1000) {
        animateCalabi.start({
          y: scrollTop / 3,
          duration: 0.5,
          opacity: 1 - Math.min(Math.max(0, scrollTop - 100), 300) / 600,
        });
      }

      scheduledAnimationFrame.current = false;
    }

    function onScroll() {
      if (!scheduledAnimationFrame.current) {
        scheduledAnimationFrame.current = true;
        requestAnimationFrame(handler);
      }
    }

    window?.addEventListener('scroll', onScroll);
    return () => {
      window?.removeEventListener('scroll', onScroll);
    };
  }, [animateCalabi]);

  return (
    <div>
      <div className={stylex(styles.main)} id="landingScrollElement">
        <Header />

        <HeroCard>
          <div className={stylex(styles.heroImageContainer)}>
            <animated.img
              src={calabi}
              alt="Decentralized Cloud Computing"
              className={stylex(styles.heroImage)}
              style={calabiStyles}
            />
          </div>

          <Hero />
        </HeroCard>

        <div className={stylex(styles.section)}>
          <HeroCard>
            <Languages />
          </HeroCard>
        </div>

        <div className={stylex(styles.section)}>
          <HeroCard>
            <KubernetesMap />
          </HeroCard>
        </div>

        <div className={stylex(styles.section)}>
          <HeroCard>
            <Enterprise />
          </HeroCard>
        </div>

        <div className={stylex(styles.section)}>
          <HeroCard>
            <Quotes />
            <Footer />
          </HeroCard>
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
