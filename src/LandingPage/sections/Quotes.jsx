// @flow

import { memo } from 'react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';

import max from '../assets/max.jpg';
import dani from '../assets/dani.jpg';
import eugene from '../assets/eugene.jpg';
import santiago from '../assets/santiago.jpg';

import Trust from './Trust';

const styles = stylex.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
    paddingTop: 40,
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
  grid: {
    marginTop: 40,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 24,
    rowGap: 24,
    paddingBottom: 40,
    '@media (max-width: 800px)': {
      gridTemplateColumns: '1fr',
      rowGap: 24,
    },
  },
  card: {
    padding: 24,
    boxShadow: 'var(--shadow-2)',
    border: '1px solid var(--border-color)',
    background: 'var(--neutral-color-100)',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 100,
    boxShadow: 'var(--shadow-2)',
    border: '1px solid var(--border-color)',
  },
  headCard: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 24,
  },
  avatarName: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 300,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--neutral-color-800)',
  },
  avatarTitle: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 4,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--neutral-color-800)',
  },
  description: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 1.2858342857,
    color: 'var(--neutral-color-600)',
    marginBottom: 0,
    marginTop: 32,
  },

  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--pink-solid-color)',
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
  descriptionTitle: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 40,
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
});

function Quotes(): React$Node {
  const intl = useIntl();

  return (
    <section className={stylex(styles.root)}>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.innerContent)}>
          <h2 className={stylex(styles.title)}>
            {intl.formatMessage({ id: 'landing.quotes.subheadline' })}
          </h2>
          <p className={stylex(styles.descriptionTitle)}>
            {intl.formatMessage({ id: 'landing.quotes.description' })}
          </p>

          <div>
            <Trust />
          </div>

          <div className={stylex(styles.grid)}>
            <div className={stylex(styles.card)}>
              <div className={stylex(styles.headCard)}>
                <img src={max} alt="Max Mergenthaler" className={stylex(styles.avatar)} />
                <div>
                  <div className={stylex(styles.avatarName)}>Max Mergenthaler</div>
                  <div className={stylex(styles.avatarTitle)}>CEO, Nixtla</div>
                </div>
              </div>

              <p className={stylex(styles.description)}>
                {`"Serpa Cloud’s GPU nodes allow us to rapidly iterate and run experiments on our models, we love them."`}
              </p>
            </div>

            <div className={stylex(styles.card)}>
              <div className={stylex(styles.headCard)}>
                <img src={eugene} alt="Eugene Nadyrshin" className={stylex(styles.avatar)} />
                <div>
                  <div className={stylex(styles.avatarName)}>Eugene Nadyrshin</div>
                  <div className={stylex(styles.avatarTitle)}>CTO, VI</div>
                </div>
              </div>

              <p className={stylex(styles.description)}>
                {`"I’m as excited about Serpa as I was when I first started using Heroku. The ease of
                deployment, without having to worry about any of the internals, is liberating!"`}
              </p>
            </div>

            <div className={stylex(styles.card, styles.secondCard)}>
              <div className={stylex(styles.headCard)}>
                <img src={santiago} alt="Santiago Zavala" className={stylex(styles.avatar)} />
                <div>
                  <div className={stylex(styles.avatarName)}>Santiago Zavala</div>
                  <div className={stylex(styles.avatarTitle)}>Managing Partner, 500 Global</div>
                </div>
              </div>

              <p className={stylex(styles.description)}>
                {`"As a developer, I know the big challenges of creating and maintaining a sophisticated infrastructure today, and the importance of that process being secure, automated, scalable, and cost-effective."`}
              </p>
            </div>

            <div className={stylex(styles.card)}>
              <div className={stylex(styles.headCard)}>
                <img src={dani} alt="Daniel Serrano" className={stylex(styles.avatar)} />
                <div>
                  <div className={stylex(styles.avatarName)}>Daniel Serrano</div>
                  <div className={stylex(styles.avatarTitle)}>Tech Lead, Vivaro Digital</div>
                </div>
              </div>

              <p className={stylex(styles.description)}>
                {`"Serpa Cloud has helped us be efficient in developer collaboration, allowing us to use different programming languages while optimizing our DevOps processes and infrastructure consumption."`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Quotes): React$AbstractComponent<{}, mixed>);
