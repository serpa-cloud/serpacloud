// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import Hero from './VideoListHero';
import VideosList from './VideosList';

const styles = stylex.create({
  main: {
    backgroundImage: `var(--surface-background), var(--neutral-gradient)`,
  },
  body: {
    width: '100%',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(120%) blur(20px)',
  },
});

function Tutorials(): React$Node {
  return (
    <main className={`LIGHT ${stylex(styles.main)}`}>
      <div className={stylex(styles.body)}>
        <div className={stylex(styles.content)}>
          <Hero />
          <VideosList />
        </div>
      </div>
    </main>
  );
}

export default (memo<{}>(Tutorials): React$AbstractComponent<{}, mixed>);
