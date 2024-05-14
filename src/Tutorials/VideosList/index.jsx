// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import Grid from '../../LandingPage/Grid';
import Hero from './Hero';
import VideosList from './VideosList';
import Header from '../Header';

const styles = stylex.create({
  main: {
    backgroundImage: `var(--surface-background), var(--neutral-gradient)`,
  },
  body: {
    width: '100%',
  },
});

function Tutorials(): React$Node {
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <Grid />
        <Header />
        <Hero />
        <VideosList />
      </div>
    </main>
  );
}

export default (memo<{}>(Tutorials): React$AbstractComponent<{}, mixed>);
