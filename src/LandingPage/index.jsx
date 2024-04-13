// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import Grid from './Grid';
import Content from './Content';

const styles = stylex.create({
  main: {
    backgroundImage: `var(--surface-background), var(--neutral-gradient)`,
  },
  body: {
    width: '100vw',
  },
});

function LandingPage(): React$Node {
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <Grid />
        <Content />
      </div>
    </main>
  );
}

export default (memo<{}>(LandingPage): React$AbstractComponent<{}, mixed>);
