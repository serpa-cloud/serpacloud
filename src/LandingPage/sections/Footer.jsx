/* eslint-disable jsx-a11y/no-redundant-roles */
// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import { ReactComponent as IconLogo } from '../../shared/images/icon.svg';

const styles = stylex.create({
  main: {
    marginTop: 24,
    boxShadow: 'rgba(62, 59, 123, 0.8) 0px 16px 44px',
    borderTop: '4px solid var(--primary-color-1)',
  },
  linksRoot: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '@media (max-width: 960px)': {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 40,
    },
  },
  logo: {
    columnGap: 16,
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'var(--neutral-color-800)',
    fontWeight: 400,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    opacity: 0.85,
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  linksList: {
    display: 'flex',
    columnGap: 16,
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: 24,
    },
  },
  links: {
    width: 200,
    paddingTop: 4,
  },
  linkHeader: {
    color: 'var(--neutral-color-800)',
    fontSize: 18,
    lineHeight: '1.1904761905',
    fontWeight: '600',
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
    '@media (max-width: 960px)': {
      textAlign: 'center',
    },
  },
  list: {
    padding: 0,
    marginTop: 16,
    marginBottom: 0,
    listStyle: 'none',
  },
  linkElement: {
    marginBottom: 16,
    '@media (max-width: 960px)': {
      textAlign: 'center',
    },
  },
  link: {
    color: 'var(--neutral-color-600)',
    fontSize: 18,
    lineHeight: '1.1904761905',
    fontWeight: '400',
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
  },
});

function Footer(): React$Node {
  return (
    <footer className={stylex(styles.main)} role="contentinfo">
      <div className={stylex(styles.linksRoot)}>
        <div className={stylex(styles.logo)}>
          <IconLogo width={36} />
          <div className={stylex(styles.logoText)}>serpa cloud</div>
        </div>

        <div className={stylex(styles.linksList)}>
          <div className={stylex(styles.links)}>
            <h3 className={stylex(styles.linkHeader)}>Company</h3>

            <ul role="list" className={stylex(styles.list)}>
              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://github.com/serpa-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  Privacy Policy
                </a>
              </li>

              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://www.linkedin.com/company/serpa-cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className={stylex(styles.links)}>
            <h3 className={stylex(styles.linkHeader)}>Social</h3>

            <ul role="list" className={stylex(styles.list)}>
              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://github.com/serpa-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  Github
                </a>
              </li>

              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://www.linkedin.com/company/serpa-cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  LinkedIn
                </a>
              </li>

              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://twitter.com/SerpaCloud"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  X (Twitter)
                </a>
              </li>

              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://www.instagram.com/serpacloud/"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  Instagram
                </a>
              </li>

              <li role="listitem" className={stylex(styles.linkElement)}>
                <a
                  href="https://www.tiktok.com/@serpacloud"
                  target="_blank"
                  rel="noreferrer"
                  className={stylex(styles.link)}
                >
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default (memo<{}>(Footer): React$AbstractComponent<{}, mixed>);
