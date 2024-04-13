/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import { Icon } from '../../shared';

import screen from '../assets/screenDark.png';

const styles = stylex.create({
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
  dashboardImage: {
    width: '100%',
    boxShadow: 'rgba(33, 31, 84, 0.6) 0px 2px 10px 2px, rgba(33, 31, 84, 0.4) 0px 0px 40px 0px',
  },
  legend: {
    marginTop: 120,
    fontSize: 24,
    color: 'white',
    fontWeight: 300,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    marginBottom: 0,
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    '@media (max-width: 980px)': {
      marginTop: 72,
    },
    '@media (max-width: 560px)': {
      fontSize: 20,
      lineHeight: '1.25',
    },
  },
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 12,
    marginBottom: 0,
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--always-white)',
    '@media (max-width: 980px)': {
      fontSize: 40,
    },
  },
  description: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    lineHeight: '1.2858342857',
    fontWeight: 300,
    color: 'var(--neutral-color-200)',
    marginBottom: 72,
    marginTop: 16,
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
  },
  titleGradient: {
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundImage:
      'linear-gradient(270deg, var(--cyan-solid-color) 0%, var(--green-solid-color) 100%)',
  },
  productCardsList: {
    columnGap: 40,
    marginTop: 40,
    display: 'grid',
    paddingBottom: 120,
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@media (max-width: 1024px)': {
      rowGap: 40,
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 760px)': {
      gridTemplateColumns: '1fr',
    },
  },
  productCard: {
    rowGap: 0,
    width: '100%',
    display: 'flex',
    paddingTop: 64,
    paddingBottom: 64,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexDirection: 'column',
    border: '1px solid #322c5b',
    backgroundImage: 'linear-gradient(45deg, rgb(14 13 31) 50%, rgb(43 43 90) 100%)',
    boxShadow: '0px 2px 10px 2px rgba(33, 31, 84, 0.6), 0px 0px 40px 0px rgba(33, 31, 84, 0.4)',
    transitionProperty: 'transform',
    transitionDuration: 'var(--fds-duration-medium-in)',
    transitionTimingFunction: 'var(--fds-animation-expand-collapse-in)',
    ':hover': {
      transform: 'scale(1.05)',
      transitionTimingFunction: 'var(--fds-animation-expand-collapse-out)',
    },
    '@media (max-width: 860px)': {
      paddingTop: 40,
      paddingBottom: 40,
    },
  },

  lastProductCard: {
    '@media (max-width: 1024px)': {
      gridColumn: '1 / span 2',
    },
    '@media (max-width: 760px)': {
      gridColumn: '1 / span 1',
    },
  },

  productCardTitle: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '1.1904761905',
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 16,
    marginBottom: 0,
    margin: 0,
    textAlign: 'center',
    color: 'white',
  },
  productCardDescription: {
    fontSize: 18,
    lineHeight: '1.381002381',
    fontWeight: 300,
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: 'var(--neutral-color-100)',
    marginBottom: 0,
    marginTop: 8,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 600,
    color: 'var(--neutral-color-100)',
  },
});

function OS(): React$Node {
  return (
    <div className={stylex(styles.innerContent)}>
      <h2 className={stylex(styles.legend)}>serpa cloud os prosperity</h2>
      <h3 className={stylex(styles.title)}>
        <span className={stylex(styles.titleGradient)}>Introducing the Cloud Operating System</span>
      </h3>

      <p className={stylex(styles.description)}>
        A better cloud needs better software. At its core, the cloud is a very large computer, a
        computer of computers. We think it’s time to redefine how we interact with it. Prosperity OS
        is our take on a simpler but still powerful way to deploy and scale applications securely.
      </p>

      <img src={screen} alt="Serpa Cloud OS Prosperity" className={stylex(styles.dashboardImage)} />

      <div className={stylex(styles.productCardsList)}>
        <div className={stylex(styles.productCard)}>
          <Icon
            icon="precision_manufacturing"
            size={64}
            weight={100}
            grade={-25}
            opticalSize={48}
            gradient="linear-gradient(45deg, var(--red-solid-color) 0%, var(--yellow-solid-color) 100%)"
          />
          <div>
            <h4 className={stylex(styles.productCardTitle, styles.buildTitle)}>Build containers</h4>
            <p className={stylex(styles.productCardDescription)}>
              From your source code leveraging
              <br />
              <span className={stylex(styles.highlight)}>Buildpacks and Docker</span>
            </p>
          </div>
        </div>

        <div className={stylex(styles.productCard)}>
          <Icon
            icon="developer_board"
            size={64}
            weight={100}
            grade={-25}
            opticalSize={48}
            gradient="linear-gradient(45deg, var(--blue-solid-color) 0%, var(--cyan-solid-color) 100%)"
          />
          <div>
            <h4 className={stylex(styles.productCardTitle)}>Compute</h4>
            <p className={stylex(styles.productCardDescription)}>
              CPU-efficient deployments requiring
              <br />
              <span className={stylex(styles.highlight)}>10x fewer resources for scaling</span>
            </p>
          </div>
        </div>

        <div className={stylex(styles.productCard, styles.lastProductCard)}>
          <Icon
            icon="router"
            size={64}
            weight={100}
            grade={-25}
            opticalSize={48}
            gradient="linear-gradient(45deg, var(--blue-solid-color) 0%, var(--pink-solid-color) 100%)"
          />
          <div>
            <h4 className={stylex(styles.productCardTitle)}>Ingress Load Balancer</h4>
            <p className={stylex(styles.productCardDescription)}>
              Expose services to internet
              <br />
              <span className={stylex(styles.highlight)}>securely and scalably</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (memo<{}>(OS): React$AbstractComponent<{}, mixed>);
