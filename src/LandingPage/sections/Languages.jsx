// @flow

import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';

import { ReactComponent as DockerLandingIcon } from '../assets/dockerLanding.svg';
import { ReactComponent as GoIcon } from '../assets/gon.svg';
import { ReactComponent as JsIcon } from '../assets/js.svg';
import { ReactComponent as NodeIcon } from '../assets/node.svg';
import { ReactComponent as PhpIcon } from '../assets/php.svg';
import { ReactComponent as PythonIcon } from '../assets/python.svg';
import { ReactComponent as RustIcon } from '../assets/rust.svg';
import { ReactComponent as SpringIcon } from '../assets/spring.svg';

import { Icon, Flexbox } from '../../shared';

const styles = stylex.create({
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

    '@media (max-width: 860px) and (min-width: 400px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '@media (max-width: 400px)': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 40,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--blue-300)',
    '@media (max-width: 980px) and (min-width: 540px)': {
      fontSize: 28,
    },
    '@media (max-width: 980px)': {
      textAlign: 'left',
    },
    '@media (max-width: 540px) and (min-width: 480px)': {
      fontSize: 28,
    },
    '@media (max-width: 480px) and (min-width: 400px)': {
      fontSize: 22,
    },
    '@media (max-width: 400px)': {
      fontSize: 18,
    },
  },
  titleHeadline: {
    color: 'var(--neutral-color-800)',
  },
  description: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 16,
    lineHeight: 1.4,
    color: 'var(--neutral-color-600)',
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
    '@media (max-width: 600px)': {
      fontSize: 16,
    },
  },
  grid: {
    marginTop: 32,
    display: 'grid',
    columnGap: '32px',
    rowGap: 24,

    gridTemplateColumns: 'repeat(5, 1fr)',
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (max-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '20px',
      marginTop: 24,
    },
  },
  svgIcon: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 32,
    opacity: 0.75,
    fill: 'var(--neutral-color-600)',
    '@media (max-width: 640px)': {
      width: '80%',
    },
  },
  ghostIcon: {
    '@media (max-width: 920px)': {
      display: 'none',
    },
  },
  icon: {
    display: 'inline-block',
    marginBottom: -12,

    '@media (max-width: 980px) and (min-width: 480px)': {
      width: '32px!important',
      height: '32px!important',
      marginBottom: -7,
    },

    '@media (max-width: 480px) and (min-width: 400px)': {
      width: '28px!important',
      height: '28px!important',
      marginBottom: -7,
    },
    '@media (max-width: 400px)': {
      width: '24px!important',
      height: '24px!important',
      marginBottom: -6,
    },
  },
  iconElement: {
    fontSize: 48,
    '@media (max-width: 980px) and (min-width: 480px)': {
      fontSize: '32px!important',
    },
    '@media (max-width: 480px) and (min-width: 400px)': {
      fontSize: '28px!important',
    },
    '@media (max-width: 400px)': {
      fontSize: '24px!important',
    },
  },
  feature: {
    border: '1px solid rgb(201 204 223)',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    boxShadow: 'var(--shadow-1)',
  },
  featureHeadline: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 16,
    fontWeight: 400,
    color: 'var(--neutral-color-600)',
    margin: 0,
    '@media (max-width: 480px)': {
      fontSize: 14,
    },
  },
  featureTitle: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 22,
    fontWeight: 500,
    color: 'var(--neutral-color-600)',
    marginTop: 16,
    marginBottom: 0,
    lineHeight: '1.4',
    '@media (max-width: 920px)': {
      fontSize: 18,
    },
    '@media (max-width: 480px)': {
      fontSize: 16,
    },
  },
  gridFeatures: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 24,
    rowGap: 20,
    marginTop: 40,
    '@media (max-width: 920px)': {
      gridTemplateColumns: '1fr',
    },
  },
  featureTitleHighlight: {
    color: 'var(--blue-300)',
  },

  toolbar: {
    display: 'flex',
    paddingBottom: 40,
    marginTop: 40,
    justifyContent: 'center',
    '@media (max-width: 680px)': {
      display: 'block',
      width: '100%',
    },
  },

  mainButton: {
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    paddingLeft: 40,
    paddingRight: 40,
    height: 64,
    color: 'white',
    display: 'flex',
    boxShadow: 'var(--shadow-1)',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 20,
    fontWeight: 500,
    boxSizing: 'border-box',
    background: 'linear-gradient(20deg,var(--blue-solid-color) 0,var(--cyan-solid-color) 100%)',
    '@media (max-width: 680px)': {
      width: '100%',
    },
    '@media (max-width: 680px) and (min-width: 540px)': {
      fontSize: 18,
    },
    '@media (max-width: 540px)': {
      height: 48,
      fontSize: 16,
    },
    '@media (max-width: 400px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

function Languages(): React$Node {
  const intl = useIntl();

  return (
    <section>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.innerContent)}>
          <h2 className={stylex(styles.title)}>
            <div className={stylex(styles.titleHeadline)}>
              {intl.formatMessage({ id: 'landing.languages.headline' })}
            </div>
            <div>
              {intl.formatMessage(
                { id: 'landing.languages.subheadline' },
                {
                  global: () => (
                    <Icon
                      icon="public"
                      color="--blue-300"
                      weight={300}
                      grade={-25}
                      size={48}
                      opticalSize={48}
                      parentClassName={styles.icon}
                      className={stylex(styles.iconElement)}
                    />
                  ),

                  push: () => (
                    <Icon
                      icon="folder_data"
                      color="--blue-300"
                      weight={300}
                      grade={-25}
                      size={48}
                      opticalSize={48}
                      parentClassName={styles.icon}
                      className={stylex(styles.iconElement)}
                    />
                  ),
                },
              )}
            </div>
          </h2>
          <p className={stylex(styles.description)}>
            {intl.formatMessage({ id: 'landing.languages.description' }, { br: () => <br /> })}
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

          <div className={stylex(styles.gridFeatures)}>
            <div className={stylex(styles.feature)}>
              <Flexbox alignItems="center" columnGap={4}>
                <Icon icon="favorite" weight={100} color="--neutral-color-600" size={20} />
                <h3 className={stylex(styles.featureHeadline)}>
                  {intl.formatMessage({ id: 'landing.languages.allLanguages.headline' })}
                </h3>
              </Flexbox>
              <h4 className={stylex(styles.featureTitle)}>
                {intl.formatMessage(
                  { id: 'landing.languages.allLanguages.title' },
                  {
                    strong: (str) => (
                      <>
                        <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                        <br />
                      </>
                    ),
                  },
                )}
              </h4>
            </div>

            <div className={stylex(styles.feature)}>
              <Flexbox alignItems="center" columnGap={4}>
                <Icon icon="package_2" weight={100} color="--neutral-color-600" size={20} />
                <h3 className={stylex(styles.featureHeadline)}>
                  {intl.formatMessage({ id: 'landing.languages.magicBuilds.headline' })}
                </h3>
              </Flexbox>
              <h4 className={stylex(styles.featureTitle)}>
                {intl.formatMessage(
                  { id: 'landing.languages.magicBuilds.title' },
                  {
                    strong: (str) => (
                      <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                    ),
                  },
                )}
              </h4>
            </div>

            <div className={stylex(styles.feature)}>
              <Flexbox alignItems="center" columnGap={4}>
                <Icon icon="bolt" weight={100} color="--neutral-color-600" size={20} />
                <h3 className={stylex(styles.featureHeadline)}>
                  {intl.formatMessage({ id: 'landing.languages.cd.headline' })}
                </h3>
              </Flexbox>
              <h4 className={stylex(styles.featureTitle)}>
                {intl.formatMessage(
                  { id: 'landing.languages.cd.title' },
                  {
                    strong: (str) => (
                      <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                    ),
                  },
                )}
              </h4>
            </div>

            <div className={stylex(styles.feature)}>
              <Flexbox alignItems="center" columnGap={4}>
                <Icon icon="waving_hand" weight={100} color="--neutral-color-600" size={20} />
                <h3 className={stylex(styles.featureHeadline)}>
                  {intl.formatMessage({ id: 'landing.languages.deployNightmare.headline' })}
                </h3>
              </Flexbox>
              <h4 className={stylex(styles.featureTitle)}>
                {intl.formatMessage(
                  { id: 'landing.languages.deployNightmare.title' },
                  {
                    strong: (str) => (
                      <>
                        <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                        <br />
                      </>
                    ),
                  },
                )}
              </h4>
            </div>
          </div>

          <div className={stylex(styles.toolbar)}>
            <a href="https://app.serpa.cloud/session/signup" className={stylex(styles.mainButton)}>
              {intl.formatMessage({ id: 'landing.signup.callToAction' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Languages): React$AbstractComponent<{}, mixed>);
