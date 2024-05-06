// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';

import Copy from './Copy';
import From from './Form';

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
    justifyContent: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 16,
    color: 'var(--neutral-color-100)',
    width: '100%',
    maxWidth: 1110,
  },
});

function Content(): React$Node {
  return (
    <div>
      <div className={stylex(styles.main)}>
        <div className={stylex(styles.viewport)}>
          <div className={stylex(styles.grid)}>
            <div>
              <Copy />
            </div>
            <div>
              <From />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
