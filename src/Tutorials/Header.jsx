// @flow
import stylex from '@serpa-cloud/stylex';
import { memo, useEffect, useCallback, useState } from 'react';

import { ReactComponent as IconLogo } from '../shared/images/icon.svg';

const styles = stylex.create({
  main: {
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    boxSizing: 'border-box',
  },
  viewport: {
    width: '100%',
    position: 'relative',
    maxWidth: '100%',
  },
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
    transform: 'translateY(0%)',
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

function Header(): React$Node {
  const [scrollDirection, SetScrollDirection] = useState('UP');

  const getScroll = useCallback(() => {
    // Initial state
    let scrollPos = 0;
    // adding scroll event
    window.addEventListener('scroll', () => {
      // detects new state and compares it with the new one
      if (document.body.getBoundingClientRect().top > scrollPos) SetScrollDirection('UP');
      else SetScrollDirection('DOWN');
      // saves the new position for iteration.
      scrollPos = document.body.getBoundingClientRect().top;
    });
  }, []);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  return (
    <div className={stylex(styles.main)}>
      <div
        className={stylex(
          styles.viewport,
          styles.header,
          scrollDirection === 'UP' ? styles.show : styles.hide,
        )}
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
      </div>
    </div>
  );
}

export default (memo<{}>(Header): React$AbstractComponent<{}, mixed>);
