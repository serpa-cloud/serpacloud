// @flow
import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';

const styles = stylex.create({
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  heroTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 56,
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 660px)': {
      paddingBottom: 40,
    },
  },

  heroContent: {
    width: '100%',
  },

  mainButton: {
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 32,
    height: 64,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 20,
    fontWeight: 500,
    boxSizing: 'border-box',
    boxShadow: 'var(--shadow-1)',
    background: 'linear-gradient(45deg,var(--pink-solid-color) 0,var(--orange-solid-color) 100%)',
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

  heroDescription: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Text,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    lineHeight: 1.4,
    fontWeight: 400,
    color: 'var(--neutral-color-600)',
    marginBottom: 16,
    marginTop: 20,
    maxWidth: 800,
    '@media (max-width: 1200px)': {
      marginTop: 8,
      fontSize: 26,
    },
    '@media (max-width: 860px)': {
      fontSize: 24,
    },
    '@media (max-width: 600px)': {
      fontSize: 18,
    },
  },

  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 300,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    marginTop: 24,
    marginBottom: 8,
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    '@media (max-width: 1200px)': {
      marginBottom: 8,
    },
    '@media (max-width: 680px)': {
      fontSize: 20,
    },
    '@media (max-width: 502px)': {
      fontSize: 16,
      letterSpacing: '.2em',
    },
  },
  titleGradient: {
    color: 'var(--neutral-color-600)',
  },

  mainTitle: {
    color: 'var(--neutral-color-800)',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
    fontWeight: 600,
    letterSpacing: '0.005em',
    lineHeight: '1',
    '@media (min-width: 680px)': {
      fontSize: 56,
    },
    '@media (max-width: 680px) and (min-width: 600px)': {
      fontSize: 48,
    },
    '@media (max-width: 600px) and (min-width: 540px)': {
      fontSize: 40,
    },
    '@media (max-width: 540px) and (min-width: 440px)': {
      fontSize: 36,
      lineHeight: '1.1',
    },
    '@media (max-width: 440px) and (min-width: 420px)': {
      fontSize: 36,
      lineHeight: '1.2',
    },
    '@media (max-width: 420px) and (min-width: 380px)': {
      fontSize: 32,
      lineHeight: '1.2',
    },
    '@media (max-width: 380px)': {
      fontSize: 24,
      lineHeight: '1.2',
    },
  },
  flashGradient: {
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundImage:
      'linear-gradient(270deg, var(--orange-solid-color) 0%, var(--pink-solid-color) 100%)',
  },

  toolbar: {
    display: 'flex',
    '@media (max-width: 680px)': {
      display: 'block',
      width: '100%',
    },
  },

  heroSection: {
    paddingLeft: 40,
    paddingRight: 40,
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 860px) and (min-width: 400px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '@media (max-width: 400px)': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
});

function Hero(): React$Node {
  const intl = useIntl();

  return (
    <section className={stylex(styles.heroSection)} id="hero">
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.heroTitle)}>
          <div className={stylex(styles.heroContent)}>
            <h1 className={stylex(styles.title)}>
              <span className={stylex(styles.titleGradient)}>
                {intl.formatMessage({ id: 'landing.hero.title' })}
              </span>
            </h1>
            <h2 className={stylex(styles.mainTitle)}>
              <div>{intl.formatMessage({ id: 'landing.hero.headline' })}</div>
              <div className={stylex(styles.flashParagraph)}>
                {intl.formatMessage(
                  {
                    id: 'landing.hero.subheadline',
                  },
                  {
                    s: (str) => <span className={stylex(styles.flashGradient)}>{str}</span>,
                  },
                )}
              </div>
            </h2>
            <p className={stylex(styles.heroDescription)}>
              {intl.formatMessage({ id: 'landing.hero.description' })}
            </p>
            <div className={stylex(styles.toolbar)}>
              <a
                href="https://app.serpa.cloud/session/signup"
                className={stylex(styles.mainButton)}
              >
                {intl.formatMessage({ id: 'landing.hero.callToAction' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Hero): React$AbstractComponent<{}, mixed>);
