// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import Content from './Content';

const styles = stylex.create({
  main: {
    backgroundImage: `var(--surface-background), var(--neutral-gradient)`,
    minHeight: '100vh',
  },
  body: {
    width: '100%',
  },
});

function ContactUs(): React$Node {
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <Content />
      </div>
    </main>
  );
}

export default (memo<{}>(ContactUs): React$AbstractComponent<{}, mixed>);
