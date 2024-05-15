/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// @flow
import stylex from '@serpa-cloud/stylex';
import { Link } from 'react-router-dom';
import { Flexbox, Text } from '../../shared';

import videosObject from '../videosObject';

import useDevice from '../../hooks/useDevice';

type Props = {
  video: string,
};

const styles = stylex.create({
  thumbContainer: {
    height: 180,
    backgroundColor: 'var(--neutral-color-400)',
  },
  videoContainer: {
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
    },
  },
  tagContainer: {
    boxSizing: 'border-box',
    backgroundColor: 'var(--neutral-color-600)',
    paddingTop: 8,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 8,
  },
  thumb: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'inline-block',
  },
});

export default function VideoContainer({ video }: Props): React$Node {
  const { width } = useDevice();
  return (
    <Link to={`/tutorials/${video}`}>
      <Flexbox flexDirection="column" rowGap={16} className={stylex(styles.videoContainer)}>
        <div className={stylex(styles.thumbContainer)}>
          {videosObject[video]?.thumb ? (
            <img
              src={videosObject[video]?.thumb ?? ''}
              alt={videosObject[video]?.title}
              className={stylex(styles.thumb)}
            />
          ) : null}
        </div>
        <Text type={width <= 860 ? 's3m' : 'bl'} color="--neutral-color-100">
          {videosObject[video]?.title}
        </Text>
        <Text type="bs" color="--neutral-color-100">
          {videosObject[video]?.description}
        </Text>

        <Flexbox flexWrap="wrap" columnGap={8} rowGap={8}>
          {videosObject[video]?.tags?.map((val, key) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className={stylex(styles.tagContainer)} key={key}>
                <Text type="bs" color="--neutral-color-100">
                  {val}
                </Text>
              </div>
            );
          })}
        </Flexbox>
      </Flexbox>
    </Link>
  );
}
