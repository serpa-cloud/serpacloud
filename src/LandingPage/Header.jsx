// @flow
import { animated } from 'react-spring';
import stylex from '@serpa-cloud/stylex';
import { memo, useEffect, useMemo, useState } from 'react';

import { ReactComponent as IconLogo } from '../shared/images/icon.svg';

type Props = {|
  width: any,
|};

const styles = stylex.create({
  header: {
    top: 0,
    zIndex: 99,
    position: 'fixed',
    background: 'rgb(14 13 31 / 70%)',
    backdropFilter: 'saturate(180%) blur(20px)',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    boxSizing: 'border-box',
    boxShadow: '0px 2px 6px 4px rgba(7, 7, 10, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100vw',
    transform: 'translateY(-100%)',
  },
  show: {
    transform: 'translateY(0%)',
    transition: 'transform 250ms cubic-bezier(0.14, 1, 0.34, 1)',
  },
  hide: {
    transform: 'translateY(-100%)',
    transition: 'transform 350ms cubic-bezier(0.45, 0.1, 0.2, 1)',
  },
  logo: {
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'var(--neutral-color-100)',
    fontWeight: 400,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    '@media (max-width: 580px)': {
      display: 'none',
    },
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 32,
    '@media (max-width: 580px)': {
      columnGap: 16,
    },
  },
  button: {
    letterSpacing: '.05em',
    lineHeight: '0.85',
    paddingLeft: 24,
    paddingRight: 24,
    height: 48,
    color: 'var(--neutral-color-800)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 16,
    fontWeight: 500,
    boxSizing: 'border-box',
    background: 'white',
    '@media (max-width: 580px)': {
      height: 40,
      paddingLeft: 12,
      paddingRight: 12,
    },
  },
  singleLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '.05em',
    lineHeight: '0.85',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
});

function Header({ width }: Props): React$Node {
  const [isIntersecting, setIsIntersecting] = useState(true);

  const observer = useMemo(
    () =>
      global.IntersectionObserver
        ? new IntersectionObserver(([entry]) => setIsIntersecting(entry.intersectionRatio > 0.2), {
            threshold: [1.0, 0.9, 0.8, 0.7, 0.3, 0.2, 0.1, 0],
          })
        : null,
    [],
  );

  useEffect(() => {
    const element = document.getElementById('hero');
    if (element) observer?.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, [observer]);

  return (
    <animated.header
      className={stylex(styles.header, isIntersecting ? styles.hide : styles.show)}
      role="banner"
      style={{ width }}
    >
      <a href="/">
        <div className={stylex(styles.logo)}>
          <IconLogo width={36} />
          <div className={stylex(styles.logoText)}>serpa cloud</div>
        </div>
      </a>
      <div className={stylex(styles.links)}>
        <a href="/session/signin" className={stylex(styles.singleLink)}>
          Sign in
        </a>

        <a href="/session/signup" className={stylex(styles.button)}>
          Get Started
        </a>
      </div>
    </animated.header>
  );
}

export default (memo<Props>(Header): React$AbstractComponent<Props, mixed>);
