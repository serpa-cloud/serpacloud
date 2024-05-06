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
    width: '100vw',
  },
});

function ContactUs(): React$Node {
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <Grid />
        <Content />
      </div>
    </main>
  );
}

export default (memo<{}>(ContactUs): React$AbstractComponent<{}, mixed>);
