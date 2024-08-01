// @flow
import { useIntl } from 'react-intl';
import { memo, useState } from 'react';
import stylex from '@serpa-cloud/stylex';

import { ReactComponent as IconLogo } from '../shared/images/icon.svg';
import { InteractiveElement, Icon } from '../shared';

type Props = {};

const styles = stylex.create({
  header: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    position: 'fixed',
    background: 'rgb(14 13 31 / 70%)',
    backdropFilter: 'saturate(180%) blur(20px)',
    paddingLeft: 24,
    boxSizing: 'border-box',
    boxShadow: '0px 2px 6px 4px rgba(7, 7, 10, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100vw',
    height: 56,
    '@media (max-width: 880px)': {
      paddingLeft: 16,
    },
  },
  logo: {
    columnGap: 12,
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 16,
    color: 'var(--neutral-color-100)',
    fontWeight: 600,
    letterSpacing: '.1em',
    lineHeight: '0.85',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  mainLinks: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 48,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 32,
    '@media (max-width: 880px)': {
      display: 'none',
    },
  },
  button: {
    letterSpacing: '.05em',
    lineHeight: '0.85',
    paddingLeft: 20,
    paddingRight: 20,
    height: 56,
    color: 'var(--neutral-color-800)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 14,
    fontWeight: 500,
    boxSizing: 'border-box',
    background: 'white',
  },
  singleLink: {
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: '.05em',
    lineHeight: '0.85',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  menu: {
    top: 56,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    position: 'fixed',
    paddingTop: 16,
    background: 'rgb(14 13 31 / 70%)',
    backdropFilter: 'saturate(180%) blur(20px)',
    '@media (min-width: 880px)': {
      display: 'none',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  buttonMenu: {
    '@media (min-width: 880px)': {
      display: 'none',
    },
  },
  singleLinkMenu: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: '.05em',
    lineHeight: '0.85',
    display: 'inline-block',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
});

function Header(): React$Node {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={stylex(styles.header)} role="banner">
        <div className={stylex(styles.mainLinks)}>
          <a href="/">
            <div className={stylex(styles.logo)}>
              <IconLogo width={36} />
              <div className={stylex(styles.logoText)}>Serpa Cloud</div>
            </div>
          </a>

          <div className={stylex(styles.links)}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.serpa.cloud"
              className={stylex(styles.singleLink)}
            >
              {intl.formatMessage({ id: 'docs' })}
            </a>

            <a href="/tutorials" className={stylex(styles.singleLink)}>
              {intl.formatMessage({ id: 'tutorials' })}
            </a>

            <a href="/contact" className={stylex(styles.singleLink)} target="_blank">
              {intl.formatMessage({ id: 'contactus' })}
            </a>
          </div>
        </div>
        <div className={stylex(styles.links)}>
          <a href="https://app.serpa.cloud/session/signup" className={stylex(styles.button)}>
            {intl.formatMessage({ id: 'signup' })}
          </a>
        </div>

        <InteractiveElement
          className={stylex(styles.button, styles.buttonMenu)}
          onClick={() => setOpen((x) => !x)}
        >
          <Icon icon={open ? 'close' : 'menu'} color="--neutral-color-800" />
        </InteractiveElement>
      </header>
      {open && (
        <nav className={stylex(styles.menu)}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.serpa.cloud"
            className={stylex(styles.singleLinkMenu)}
          >
            {intl.formatMessage({ id: 'docs' })}
          </a>

          <a href="/tutorials" className={stylex(styles.singleLinkMenu)}>
            {intl.formatMessage({ id: 'tutorials' })}
          </a>

          <a href="/contact" className={stylex(styles.singleLinkMenu)} target="_blank">
            {intl.formatMessage({ id: 'contactus' })}
          </a>
        </nav>
      )}
    </>
  );
}

export default (memo<Props>(Header): React$AbstractComponent<Props, mixed>);
