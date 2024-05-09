// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import Grid from '../LandingPage/Grid';
import Content from './Content';

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
        <Content />
      </div>
    </main>
  );
}

export default (memo<{}>(Tutorials): React$AbstractComponent<{}, mixed>);
