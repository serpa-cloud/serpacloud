// @flow
import { memo, useEffect } from 'react';

import stylex from '@serpa-cloud/stylex';

import Grid from '../../LandingPage/Grid';
import Container from './Container';

const styles = stylex.create({
  main: {
    backgroundImage: `var(--surface-background), var(--neutral-gradient)`,
  },
  body: {
    width: '100%',
  },
  container: {
    width: '100%',
    maxWidth: 1110,
    margin: 'auto',
  },
});

function VideoLanding(): React$Node {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <Grid />
        <Container />
      </div>
    </main>
  );
}

export default (memo<{}>(VideoLanding): React$AbstractComponent<{}, mixed>);
