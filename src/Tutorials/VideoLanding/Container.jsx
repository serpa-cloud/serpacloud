// @flow
import stylex from '@serpa-cloud/stylex';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Padding, Text } from '../../shared';

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
    paddingBottom: 40,
  },
  container: {
    width: '100%',
    maxWidth: 1110,
    margin: 'auto',
  },
  videoTitle: {
    maxWidth: 500,
    margin: 'auto',
  },
  videoContainer: {
    height: 500,
  },
});

function Container(): React$Node {
  const { videoName = '' } = useParams();
  return (
    <div className={stylex(styles.main)}>
      <div className={stylex(styles.viewport)}>
        <div className={stylex(styles.container)}>
          <Padding horizontal={16} top={48}>
            <div className={stylex(styles.videoTitle)}>
              <Text type="h2" color="--neutral-color-100">
                {videosObject[videoName]?.title}
              </Text>
            </div>

            <Padding top={32} className={stylex(styles.videoContainer)}>
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
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(Container): React$AbstractComponent<{}, mixed>);
