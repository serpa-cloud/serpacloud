// @flow

import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import eugene from '../assets/eugene.jpg';
import santiago from '../assets/santiago.jpg';

const styles = stylex.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
    marginTop: 80,
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 24,
    '@media (max-width: 800px)': {
      gridTemplateColumns: '1fr',
      rowGap: 24,
    },
  },
  card: {
    padding: 24,
    boxShadow: 'var(--shadow-2)',
    border: '1px solid var(--border-color)',
    background: 'var(--neutral-gradient)',
  },
  avatar: {
    width: 120,
    height: 120,
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
  secondCard: {
    marginTop: 40,
    '@media (max-width: 800px)': {
      marginTop: 0,
    },
  },

  title: {
    color: 'var(--blue-300)',
    fontSize: 24,
    lineHeight: '1.1904761905',
    fontWeight: '600',
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
  },
  descriptionTitle: {
    fontSize: 19,
    lineHeight: '1.4211026316',
    fontWeight: 600,
    letterSpacing: '.012em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 12,
    marginBottom: 40,
    maxWidth: 680,
    color: 'var(--neutral-color-800)',
  },
});

function Quotes(): React$Node {
  return (
    <section className={stylex(styles.root)}>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.innerContent)}>
          <h2 className={stylex(styles.title)}>Developers love us</h2>
          <p className={stylex(styles.descriptionTitle)}>
            We automate application management using containers and native cloud technologies,
            strategically placing resources near users for faster performance, so developers can
            innovate and deliver top experiences to their customers
          </p>

          <div className={stylex(styles.grid)}>
            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Quotes): React$AbstractComponent<{}, mixed>);
