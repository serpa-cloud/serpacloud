// @flow

import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import { ReactComponent as DockerLandingIcon } from '../assets/dockerLanding.svg';
import { ReactComponent as GoIcon } from '../assets/gon.svg';
import { ReactComponent as JsIcon } from '../assets/js.svg';
import { ReactComponent as NodeIcon } from '../assets/node.svg';
import { ReactComponent as PhpIcon } from '../assets/php.svg';
import { ReactComponent as PythonIcon } from '../assets/python.svg';
import { ReactComponent as RustIcon } from '../assets/rust.svg';
import { ReactComponent as SpringIcon } from '../assets/spring.svg';

const styles = stylex.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
  },
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  innerContent: {
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 40,
    paddingRight: 40,
    '@media (max-width: 1200px)': {
      maxWidth: 960,
    },
    '@media (max-width: 880px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 80,
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--blue-300)',
    '@media (max-width: 980px)': {
      paddingTop: 48,
      fontSize: 40,
    },
  },
  description: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    fontWeight: 300,
    marginBottom: 0,
    marginTop: 8,
    lineHeight: '1.2858342857',
    color: 'var(--neutral-color-600)',
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
  },
  grid: {
    marginTop: 40,
    display: 'grid',
    columnGap: '32px',
    rowGap: 24,
    gridTemplateColumns: 'repeat(5, 1fr)',
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (max-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  svgIcon: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 32,
    opacity: 0.75,
    fill: 'var(--neutral-color-600)',
  },
  ghostIcon: {
    '@media (max-width: 920px)': {
      display: 'none',
    },
  },
});

function Languages(): React$Node {
  return (
    <section className={stylex(styles.root)}>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.innerContent)}>
          <h2 className={stylex(styles.title)}>More than Storage, Serverless or Javascript</h2>
          <p className={stylex(styles.description)}>
            We have Kubernetes nodes across 800 locations worldwide to run applications
            <br />
            in any language, using containers and Cloud Native technologies
          </p>

          <div className={stylex(styles.grid)}>
            <DockerLandingIcon width={120} height={120} className={stylex(styles.svgIcon)} />
            <GoIcon width={120} height={120} className={stylex(styles.svgIcon)} />
            <PythonIcon width={120} height={120} className={stylex(styles.svgIcon)} />

            <NodeIcon width={120} height={120} className={stylex(styles.svgIcon)} />
            <SpringIcon width={120} height={120} className={stylex(styles.svgIcon)} />

            <div className={stylex(styles.ghostIcon)} />
            <PhpIcon width={120} height={120} className={stylex(styles.svgIcon)} />
            <JsIcon width={120} height={120} className={stylex(styles.svgIcon)} />

            <RustIcon width={120} height={120} className={stylex(styles.svgIcon)} />
            <div className={stylex(styles.ghostIcon)} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Languages): React$AbstractComponent<{}, mixed>);
