// @flow
import stylex from '@serpa-cloud/stylex';
import { Flexbox, Text } from '../shared';

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
});

export default function VideoContainer() {
  return (
    <Flexbox flexDirection="column" rowGap={16} className={stylex(styles.videoContainer)}>
      <div className={stylex(styles.thumbContainer)} />
      <Text type="bl" color="--neutral-color-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <Text type="bs" color="--neutral-color-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt felis justo, eget
        fringilla lorem facilisis eu.
      </Text>
      <Flexbox flexWrap="wrap" columnGap={8} rowGap={8}>
        <div className={stylex(styles.tagContainer)}>
          <Text type="bs" color="--neutral-color-100">
            Lorem
          </Text>
        </div>

        <div className={stylex(styles.tagContainer)}>
          <Text type="bs" color="--neutral-color-100">
            Lorem ipsum dolor
          </Text>
        </div>

        <div className={stylex(styles.tagContainer)}>
          <Text type="bs" color="--neutral-color-100">
            Lorem ipsum
          </Text>
        </div>

        <div className={stylex(styles.tagContainer)}>
          <Text type="bs" color="--neutral-color-100">
            Lorem ipsum dolor
          </Text>
        </div>

        <div className={stylex(styles.tagContainer)}>
          <Text type="bs" color="--neutral-color-100">
            Lorem
          </Text>
        </div>
      </Flexbox>
    </Flexbox>
  );
}
