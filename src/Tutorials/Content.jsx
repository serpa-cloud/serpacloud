// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';

import { Grid, Padding } from '../shared';

import VideoContainer from './VideoContainer';

import useDevice from '../hooks/useDevice';

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
    paddingBottom: 40,
  },
  container: {
    width: '100%',
    maxWidth: 1110,
    margin: 'auto',
  },
  thumbContainer: {
    height: 180,
    backgroundColor: '#ccc',
  },
  videoContainer: {
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
    },
  },
});

function Content(): React$Node {
  const { width } = useDevice();
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <div className={stylex(styles.container)}>
          <Padding horizontal={16}>
            <Grid
              columns={(width <= 768 && '1fr') || (width <= 932 && '1fr 1fr') || '1fr 1fr 1fr'}
              rowGap={24}
              columnGap={32}
            >
              <VideoContainer />
              <VideoContainer />
              <VideoContainer />

              <VideoContainer />
              <VideoContainer />
              <VideoContainer />

              <VideoContainer />
              <VideoContainer />
              <VideoContainer />
            </Grid>
          </Padding>
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(Content): React$AbstractComponent<{}, mixed>);
