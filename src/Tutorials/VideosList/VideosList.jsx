// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';

import { Grid, Padding, Text } from '../../shared';

import VideoContainer from './VideoContainer';
import Footer from '../../LandingPage/sections/Footer';
import noiseUrl from '../../LandingPage/assets/noise.png';

import useDevice from '../../hooks/useDevice';

import videosObject from '../videosObject';

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
  container: {
    width: '100%',
    maxWidth: 1110,
    margin: 'auto',
  },
});

function VideosList(): React$Node {
  const { width } = useDevice();
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <div className={stylex(styles.container)}>
          <Padding horizontal={16}>
            <Padding bottom={32}>
              <Text color="--neutral-color-100" type="h2">
                Video tutorials
              </Text>
            </Padding>
            <Grid
              columns={(width <= 768 && '1fr') || (width <= 932 && '1fr 1fr') || '1fr 1fr 1fr'}
              rowGap={24}
              columnGap={32}
            >
              {Object.keys(videosObject).map((video) => {
                return <VideoContainer key={video} video={video} />;
              })}
            </Grid>
          </Padding>
        </div>
        <div
          className={stylex(styles.footerContainer)}
          style={{
            backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(VideosList): React$AbstractComponent<{}, mixed>);
