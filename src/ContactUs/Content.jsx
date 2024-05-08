// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';

import Copy from './Copy';
import From from './Form';

import { ReactComponent as IconLogo } from '../shared/images/icon.svg';

import { Flexbox, Padding } from '../shared';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 32,
    color: 'var(--neutral-color-100)',
    width: '100%',
    maxWidth: 1110,
    paddingLeft: 16,
    paddingRight: 16,
    '@media (max-width: 1000px)': {
      gridTemplateColumns: '1fr',
      rowGap: 24,
    },
    '@media (max-width: 540px)': {
      gridTemplateColumns: '1fr',
      paddingLeft: 8,
      paddingRight: 8,
      rowGap: 24,
    },
  },
  logoContainer: {
    width: '100%',
    maxWidth: 1110,
    boxSizing: 'border-box',
  },
  logo: {
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: 'var(--neutral-color-100)',
    fontWeight: 400,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
});

function Content(): React$Node {
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <Padding top={40} bottom={56} horizontal={16} className={stylex(styles.logoContainer)}>
          <a href="/">
            <div className={stylex(styles.logo)}>
              <IconLogo width={36} />
              <div className={stylex(styles.logoText)}>serpa cloud</div>
            </div>
          </a>
        </Padding>

        <Flexbox>
          <div className={stylex(styles.grid)}>
            <div>
              <Copy />
            </div>
            <div>
              <From />
            </div>
          </div>
        </Flexbox>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
