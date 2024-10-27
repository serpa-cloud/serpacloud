// @flow

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import styles from './Quotes.module.scss';

type Quote = {
  img: string,
  alt: string,
  name: string,
  title: string,
  text: string,
};

type Props = {
  quote: Quote,
};

function QuoteCard({ quote }: Props): React$Node {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (inView) {
      let index = 0;
      const interval = setInterval(() => {
        const selectedIndex = index;
        setTypedText((prev) => prev + quote.text[selectedIndex]);
        index += 1;
        if (index === quote.text.length) {
          clearInterval(interval);
        }
      }, 2000 / quote.text.length);
    }
  }, [inView, quote.text]);

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.headCard}>
        <img src={quote.img} alt={quote.alt} className={styles.avatar} />
        <div>
          <div className={styles.avatarName}>{quote.name}</div>
          <div className={styles.avatarTitle}>{quote.title}</div>
        </div>
      </div>

      <pre className={styles.codeBox}>
        <span>{typedText}</span>
      </pre>
    </div>
  );
}

export default QuoteCard;
