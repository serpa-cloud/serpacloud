// @flow
import stylex from '@serpa-cloud/stylex';
import { Flexbox, Text } from '../shared';

const styles = stylex.create({
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
    </Flexbox>
  );
}
