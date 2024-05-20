// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../LandingPage/sections/Footer';
import noiseUrl from '../../LandingPage/assets/noise.png';

import { Padding, Text, Card } from '../../shared';

import videosObject from '../videosObject';

import useDevice from '../../hooks/useDevice';

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
    paddingBottom: 48,
    boxSizing: 'border-box',
  },
  videoTitle: {
    maxWidth: 800,
    margin: 'auto',
  },
  videoContainer: {
    height: 600,
    '@media (max-width: 768px)': {
      height: 400,
    },
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  description: {
    width: '100%',
    maxWidth: 800,
    margin: 'auto',
  },
  footerContainer: {
    marginTop: -80,
  },
});

function Container(): React$Node {
  const { width } = useDevice();
  const { videoName = '' } = useParams();
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <Padding
          className={stylex(styles.container)}
          top={120}
          bottom={48}
          horizontal={width <= 768 ? 8 : 16}
        >
          <Card>
            <Padding horizontal={16} vertical={24}>
              <Padding className={stylex(styles.videoTitle)} vertical={24}>
                <Text type={width <= 860 ? 'h3' : 'h2'} color="--neutral-color-800">
                  {videosObject[videoName]?.title}
                </Text>
              </Padding>

              <Padding vertical={32} className={stylex(styles.videoContainer)}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videosObject[videoName]?.id}`}
                  title={`${videosObject[videoName]?.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                />
              </Padding>
            </Padding>
          </Card>
        </Padding>
        {false && (
          <Padding vertical={32} horizontal={32} className={stylex(styles.descriptionContainer)}>
            <div className={stylex(styles.description)}>
              <Text type={width <= 860 ? 's3r' : 'bl'} color="--neutral-color-500">
                {videosObject[videoName]?.description}
              </Text>
            </div>
          </Padding>
        )}
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

export default (memo<{}>(Container): React$AbstractComponent<{}, mixed>);
