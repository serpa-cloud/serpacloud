// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';

import Copy from './Copy';
import From from './Form';

import { ReactComponent as IconLogo } from '../shared/images/icon_codegen.svg';

import { Flexbox, Padding } from '../shared';

const styles = stylex.create({
  main: {
    width: '100vw',
    zIndex: 2,
    boxSizing: 'border-box',
    borderTop: '2px solid var(--primary-color-1)',
  },
  viewport: {
    width: '100%',
    maxWidth: 1200,
    position: 'relative',
    paddingBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 40,
  },
  grid: {
    display: 'grid',

    columnGap: 0,
    color: 'var(--neutral-color-100)',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    '@media (min-width: 1200px)': {
      gridTemplateColumns: '600px 1fr 480px',
      rowGap: 24,
    },
    '@media (min-width: 920px) and (max-width: 1200px)': {
      gridTemplateColumns: '50% 1fr 45%',
      rowGap: 24,
    },
    '@media (min-width: 540px) and (max-width: 920px)': {
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
  logo: {
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'var(--neutral-color-800)',
    fontWeight: 400,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
});

function Content(): React$Node {
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <Padding top={16} bottom={56} horizontal={16} className={stylex(styles.logoContainer)}>
          <a href="/">
            <div className={stylex(styles.logo)}>
              <IconLogo width={36} />
              <div className={stylex(styles.logoText)}>Serpa AI</div>
            </div>
          </a>
        </Padding>

        <Flexbox>
          <div className={stylex(styles.grid)}>
            <div>
              <Copy />
            </div>
            <div />
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
