// @flow
import stylex from '@serpa-cloud/stylex';
import { useRef, useState, memo } from 'react';
import { useTransition, animated } from 'react-spring';

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
    paddingBottom: 40,
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 660px)': {
      paddingBottom: 0,
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
    fontWeight: 400,
    boxSizing: 'border-box',
    background: 'linear-gradient(45deg,var(--pink-solid-color) 0,var(--orange-solid-color) 100%)',
    '@media (max-width: 680px)': {
      width: '100%',
    },
    '@media (max-width: 540px)': {
      height: 48,
    },
  },

  heroDescription: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 28,
    fontWeight: 300,
    color: 'var(--neutral-color-600)',
    marginBottom: 0,
    marginTop: 16,
    '@media (max-width: 1200px)': {
      marginTop: 8,
      fontSize: 26,
    },
    '@media (max-width: 860px)': {
      fontSize: 24,
    },
    '@media (max-width: 600px)': {
      fontSize: 20,
    },
  },

  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 300,
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    marginTop: 0,
    marginBottom: 16,
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    '@media (max-width: 1200px)': {
      marginBottom: 8,
    },
    '@media (max-width: 600px)': {
      fontSize: 24,
    },
    '@media (max-width: 480px)': {
      fontSize: 20,
    },
  },
  titleGradient: {
    color: 'var(--neutral-color-600)',
  },

  mainTitle: {
    color: 'var(--neutral-color-800)',
    textAlign: 'left',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
    fontSize: 80,
    fontWeight: 600,
    letterSpacing: '0.005em',
    lineHeight: '1',
    '@media (max-width: 1200px)': {
      fontSize: 72,
      lineHeight: '1.05',
    },
    '@media (max-width: 860px)': {
      fontSize: 56,
    },
    '@media (max-width: 680px)': {
      fontSize: 48,
    },
    '@media (max-width: 600px)': {
      fontSize: 40,
    },
    '@media (max-width: 540px)': {
      fontSize: 36,
    },
    '@media (max-width: 440px)': {
      fontSize: 36,
    },
    '@media (max-width: 420px)': {
      fontSize: 32,
    },
    '@media (max-width: 380px)': {
      fontSize: 26,
    },
  },
  flashingParent: {
    position: 'relative',
  },
  flashingItem: {
    position: 'absolute',
    whiteSpace: 'nowrap',
  },
  ghostWord: {
    width: 356,
    height: 1,
    display: 'inline-block',
    '@media (max-width: 1200px)': {
      width: 320,
    },
    '@media (max-width: 860px)': {
      width: 250,
    },
    '@media (max-width: 680px)': {
      width: 210,
    },
    '@media (max-width: 600px)': {
      width: 180,
    },
    '@media (max-width: 540px)': {
      width: 160,
    },
    '@media (max-width: 440px)': {
      width: 120,
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
    '@media (max-width: 860px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

const words = ['the future', 'scalable', 'secure', 'fast'];

function Hero(): React$Node {
  const refTimer = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const transitions = useTransition([words[currentIndex]], {
    from: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 50 },
    onRest() {
      clearTimeout(refTimer.current);
      refTimer.current = setTimeout(() => {
        setCurrentIndex((wordIndex) => {
          return (wordIndex + 1) % words.length;
        });
      }, 1500);
    },
  });

  return (
    <section className={stylex(styles.heroSection)}>
      <div className={stylex(styles.centered)}>
        <div className={stylex(styles.heroTitle)}>
          <div className={stylex(styles.heroContent)}>
            <h1 className={stylex(styles.title)}>
              <span className={stylex(styles.titleGradient)}>serpa cloud</span>
            </h1>
            <h2 className={stylex(styles.mainTitle)}>
              <div>(de)centralized cloud</div>
              <div className={stylex(styles.flashParagraph)}>
                <span>{`computing is `}</span>
                <span className={stylex(styles.flashingParent)}>
                  {transitions((style, item) => (
                    <animated.span
                      style={style}
                      className={stylex(styles.flashingItem, styles.flashGradient)}
                    >
                      {item}
                    </animated.span>
                  ))}
                  <span className={stylex(styles.ghostWord)}>{` `}</span>
                </span>
              </div>
            </h2>
            <p className={stylex(styles.heroDescription)}>
              Deploy, Scale and Deliver Applications faster than ever.
            </p>
            <div className={stylex(styles.toolbar)}>
              <a href="/session/signup" className={stylex(styles.mainButton)}>
                start here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(Hero): React$AbstractComponent<{}, mixed>);
