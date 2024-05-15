// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../LandingPage/sections/Footer';
import noiseUrl from '../../LandingPage/assets/noise.png';

import { Padding, Text } from '../../shared';

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
    paddingTop: 100,
  },
  videoTitle: {
    maxWidth: 800,
    margin: 'auto',
  },
  videoContainer: {
    height: 500,
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
        <Padding className={stylex(styles.container)}>
          <Padding horizontal={16}>
            <div className={stylex(styles.videoTitle)}>
              <Text type={width <= 860 ? 'h3' : 'h2'} color="--neutral-color-100">
                {videosObject[videoName]?.title}
              </Text>
            </div>

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
        </Padding>
        <Padding vertical={32} horizontal={32} className={stylex(styles.descriptionContainer)}>
          <div className={stylex(styles.description)}>
            <Text type={width <= 860 ? 's3r' : 'bl'} color="--neutral-color-500">
              {videosObject[videoName]?.description}
            </Text>
          </div>
        </Padding>
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
