// @flow

import { memo } from 'react';
import max from '../assets/max.jpg';
import dani from '../assets/dani.jpg';
import eugene from '../assets/eugene.jpg';
import santiago from '../assets/santiago.jpg';

import Trust from './Trust';
import QuoteCard from './QuoteCard';
import styles from './Quotes.module.scss';

function Quotes({ hideQuotes }): React$Node {
  const quotes = [
    {
      img: max,
      alt: 'Max Mergenthaler',
      name: 'Max Mergenthaler',
      title: 'CEO, Nixtla',
      text:
        'Serpa Cloud’s GPU nodes allow us to rapidly iterate and run experiments on our models, we love them.',
    },
    {
      img: eugene,
      alt: 'Eugene Nadyrshin',
      name: 'Eugene Nadyrshin',
      title: 'CTO, VI',
      text:
        'I’m as excited about Serpa as I was when I first started using Heroku. The ease of deployment, without having to worry about any of the internals, is liberating!',
    },
    {
      img: santiago,
      alt: 'Santiago Zavala',
      name: 'Santiago Zavala',
      title: 'Managing Partner, 500 Global',
      text:
        'As a developer, I know the big challenges of creating and maintaining a sophisticated infrastructure today, and the importance of that process being secure, automated, scalable, and cost-effective.',
    },
    {
      img: dani,
      alt: 'Daniel Serrano',
      name: 'Daniel Serrano',
      title: 'Tech Lead, Vivaro Digital',
      text:
        'Serpa Cloud has helped us be efficient in developer collaboration, allowing us to use different programming languages while optimizing our DevOps processes and infrastructure consumption.',
    },
  ];

  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          <span className={styles.titleGradient}>Developers love us</span>
        </h2>
        <h3 className={styles.subtitle}>+6,000 developers trust Serpa</h3>
        <p className={styles.description}>
          We have helped thousands of companies and developers build and deliver technology 20x
          faster using AI.
        </p>
      </div>

      <div>
        <Trust />
      </div>

      {!hideQuotes ? (
        <div className={styles.grid}>
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>
      ) : (
        <div className={styles.grid} />
      )}
    </section>
  );
}

export default (memo<{}>(Quotes): React$AbstractComponent<{}, mixed>);
