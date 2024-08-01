// @flow

import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';

import { Icon } from '../../shared';

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
    paddingTop: 48,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--green-300)',
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
    '@media (max-width: 980px)': {
      textAlign: 'left',
    },
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
    '@media (max-width: 600px)': {
      fontSize: 16,
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
  toolbar: {
    display: 'flex',
    paddingBottom: 40,
    marginTop: 40,
    '@media (max-width: 680px)': {
      display: 'block',
      width: '100%',
    },
    '@media (max-width: 980px)': {
      justifyContent: 'flex-start',
    },
  },

  mainButton: {
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    paddingLeft: 40,
    paddingRight: 40,
    height: 64,
    color: 'var(--neutral-color-800)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 20,
    fontWeight: 500,
    boxSizing: 'border-box',
    boxShadow: 'var(--shadow-1)',
    background: 'linear-gradient(20deg,var(--green-300) 0,var(--green-solid-color) 100%)',
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
              {intl.formatMessage({ id: 'landing.enterprise.headline' })}
            </div>
            <div>
              {intl.formatMessage(
                { id: 'landing.enterprise.subheadline' },
                {
                  global: () => (
                    <Icon
                      icon="corporate_fare"
                      color="--green-300"
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
                      icon="lock"
                      color="--green-300"
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
            {intl.formatMessage({ id: 'landing.enterprise.description' }, { br: () => <br /> })}
          </p>

          <div className={stylex(styles.toolbar)}>
            <a href="/contact" className={stylex(styles.mainButton)} target="_blank">
              {intl.formatMessage({ id: 'landing.contactus.callToAction' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Languages): React$AbstractComponent<{}, mixed>);
