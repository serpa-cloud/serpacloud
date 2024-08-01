// @flow
import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';

import VideoContainer from './VideoListElement';
import Footer from '../../LandingPage/sections/Footer';
import noiseUrl from '../../LandingPage/assets/noise.png';

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
    maxWidth: 1200,
    margin: 'auto',
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: 'SF Pro Display, SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--neutral-color-800)',
    paddingBottom: 16,
    paddingTop: 16,
    borderBottom: '1px solid var(--neutral-color-400)',
  },
  grid: {
    display: 'grid',
    columnGap: 40,
    rowGap: 32,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    '@media (min-width: 940px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    '@media (max-width: 940px) and (min-width: 780px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 780px)': {
      gridTemplateColumns: '1fr',
    },
  },
  footerContainer: {
    marginTop: 80,
  },
});

function VideosList(): React$Node {
  const intl = useIntl();

  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <div
          className={stylex(styles.container)}
          style={{
            backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
          }}
        >
          <h2 className={stylex(styles.title)}>
            {intl.formatMessage({ id: 'tutorials.subtitle' })}
          </h2>
          <div className={stylex(styles.grid)}>
            {Object.keys(videosObject).map((video) => {
              return <VideoContainer key={video} video={video} />;
            })}
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
    </div>
  );
}

export default (memo<{}>(VideosList): React$AbstractComponent<{}, mixed>);
