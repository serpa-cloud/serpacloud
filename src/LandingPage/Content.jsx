// @flow
import stylex from '@serpa-cloud/stylex';
import { useRef, useEffect, memo } from 'react';
import { useSpring, animated } from 'react-spring';

import HeroCard from './HeroCard';

import Hero from './sections/Hero';
import Trust from './sections/Trust';

import calabi from './assets/calabi.png';
import NetworkMap from './sections/NetworkMap';
import Languages from './sections/Languages';
import Quotes from './sections/Quotes';
import Footer from './sections/Footer';

const styles = stylex.create({
  main: {
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    boxSizing: 'border-box',
    paddingTop: 160,
    '@media (max-width: 860px)': {
      paddingTop: 40,
    },
    '@media (max-width: 580px)': {
      paddingTop: 0,
    },
  },

  heroImageContainer: {
    width: '100%',
    maxWidth: 480,
    paddingTop: 40,
    paddingBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: -120,
    aspectRatio: '1.09',
    '@media (max-width: 860px)': {
      maxWidth: 360,
      marginTop: -56,
      paddingTop: 24,
    },
    '@media (max-width: 580px)': {
      maxWidth: 200,
      marginTop: 0,
    },
  },
  heroImage: {
    width: '100%',
  },
  trustedContainer: {
    zIndex: 2,
    position: 'relative',
  },
});

function Content(): React$Node {
  const trustedRef = useRef();

  const [calabiStyles, animateCalabi] = useSpring(
    () => ({
      y: 0,
      opacity: 1,
    }),
    [],
  );

  const [trustedStyles, animatedTrusted] = useSpring(
    () => ({
      y: 0,
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

      const trustedTop = trustedRef?.current?.getBoundingClientRect()?.top ?? 0;

      if (trustedTop <= 0 && trustedTop >= -370) {
        animatedTrusted.start({
          immediate: true,
          y: (82 * trustedTop) / 230,
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
  }, [animateCalabi, animatedTrusted]);

  return (
    <div>
      <div className={stylex(styles.main)} id="landingScrollElement">
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

          <animated.div
            className={stylex(styles.trustedContainer)}
            style={trustedStyles}
            ref={trustedRef}
          >
            <Trust />
          </animated.div>

          <NetworkMap />

          <Languages />

          <Quotes />

          <Footer />
        </HeroCard>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
