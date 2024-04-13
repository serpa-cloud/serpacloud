// @flow
import stylex from '@serpa-cloud/stylex';
import { useSpring, animated } from 'react-spring';
import { useRef, useState, useEffect, memo } from 'react';

import noiseUrl from './assets/noise.png';

type Props = {|
  children: React$Node,
|};

const styles = stylex.create({
  viewport: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 1,
    boxShadow: 'var(--shadow-1)',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundPositionY: 'top',
    backgroundAttachment: 'fixed',
    maxWidth: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

function getWidthReference() {
  const width = window.innerWidth;

  if (width > 1200) {
    return 1200;
  }

  return 960;
}

function HeroCard({ children }: Props): React$Node {
  const [hoverActive, setHoverActive] = useState(true);

  const scheduledAnimationFrame = useRef<boolean>(false);

  const [style, animate] = useSpring(
    () => ({
      width: `1200px`,
    }),
    [],
  );

  useEffect(() => {
    function handler() {
      if (window.innerWidth > 960) {
        const scrollTop = window?.scrollY ?? 0;
        const minScroll = 500;
        const maxScroll = 900;

        const range = maxScroll - minScroll;
        const position = Math.min(Math.max(scrollTop - minScroll, 0), range);

        const scale = position / range;
        const widthReference = getWidthReference();
        const spaceDifference = Math.min(window.innerWidth, 1800) - widthReference;

        const newActive = scale < 1;
        if (newActive !== hoverActive) setHoverActive(scale < 1);

        animate.start({
          width: `${widthReference + spaceDifference * scale}px`,
          immediate: true,
        });

        scheduledAnimationFrame.current = false;
      }
    }

    function onScroll() {
      if (!scheduledAnimationFrame.current) {
        scheduledAnimationFrame.current = true;
        requestAnimationFrame(handler);
      }
    }

    window?.addEventListener('scroll', onScroll);
    window?.addEventListener('resize', onScroll);
    return () => {
      window?.removeEventListener('scroll', onScroll);
      window?.removeEventListener('resize', onScroll);
    };
  }, [animate, hoverActive]);

  useEffect(() => {
    const widthReference = getWidthReference();

    if (window.innerWidth > 960) {
      animate.start({ width: `${widthReference}px`, immediate: true });
    }
  }, [animate]);

  return (
    <animated.div
      className={`${stylex(styles.viewport)} LIGHT`}
      style={{
        backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
        ...style,
      }}
    >
      {children}
    </animated.div>
  );
}

export default (memo<Props>(HeroCard): React$AbstractComponent<Props, mixed>);
