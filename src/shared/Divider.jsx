// @flow
import stylex from '@serpa-cloud/stylex';

const styles = stylex.create({
  divider: {
    height: 1,
    backgroundColor: 'var(--border-color)',
    margin: 0,
    border: 'none',
  },
});

export default function Divider(): React$Node {
  return <hr className={stylex(styles.divider)} />;
}
