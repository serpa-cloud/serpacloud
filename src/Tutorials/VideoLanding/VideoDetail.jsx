// @flow
import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';
import { useParams } from 'react-router-dom';

import Footer from '../../LandingPage/sections/Footer';
import noiseUrl from '../../LandingPage/assets/noise.png';

import { Padding } from '../../shared';

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
    paddingTop: 56,
  },
  viewport: {
    width: '100%',
    position: 'relative',
    maxWidth: '100%',
  },
  container: {
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
    boxSizing: 'border-box',
  },
  videoContainer: {
    aspectRatio: '16 / 9',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  description: {
    width: '100%',
    maxWidth: 800,
    margin: 'auto',
  },
  title: {
    fontFamily: 'SF Pro Display, SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--neutral-color-800)',
  },
});

function VideoDetail(): React$Node {
  const intl = useIntl();
  const { videoName = '' } = useParams();

  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <div
          className={stylex(styles.container)}
          style={{
            backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
          }}
        >
          <Padding horizontal={16} vertical={24}>
            <div className={stylex(styles.title)}>
              {intl.formatMessage({ id: videosObject[videoName]?.title })}
            </div>

            <Padding top={24} className={stylex(styles.videoContainer)}>
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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(VideoDetail): React$AbstractComponent<{}, mixed>);
