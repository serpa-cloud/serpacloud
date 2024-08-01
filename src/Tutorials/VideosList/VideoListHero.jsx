// @flow
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';
import { Grid, Flexbox, Padding } from '../../shared';

import calabi from '../../LandingPage/assets/calabi.png';

const styles = stylex.create({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 860px)': {
      gridTemplateColumns: '1fr',
    },
  },
  header: {
    width: '100%',
    position: 'relative',
    maxWidth: '100%',
  },
  container: {
    width: '100%',
    maxWidth: 1110,
    margin: 'auto',
  },
  heroImageContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 360,
    paddingTop: 40,
    paddingBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    aspectRatio: '1.09',
    '@media (max-width: 860px)': {
      maxWidth: 360,
      paddingTop: 24,
    },
    '@media (max-width: 580px)': {
      maxWidth: 200,
      marginTop: 0,
    },
  },
  heroImage: {
    width: '100%',
  },
  title: {
    fontFamily: 'SF Pro Display, SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'white',
  },
  description: {
    fontFamily: 'SF Pro Text, SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: '.007em',
    lineHeight: 1.4,
    color: 'var(--neutral-color-400)',
  },
});

export default function VideoListHero(): React$Node {
  const intl = useIntl();

  return (
    <Padding top={56} bottom={32} className={stylex(styles.header)}>
      <div className={stylex(styles.container)}>
        <Grid className={stylex(styles.grid)}>
          <Flexbox justifyContent="center" flexDirection="column" rowGap={16}>
            <h1 className={stylex(styles.title)}>
              {intl.formatMessage({ id: 'tutorials.title' })}
            </h1>
            <p className={stylex(styles.description)}>
              {intl.formatMessage({ id: 'tutorials.description' })}
            </p>
          </Flexbox>

          <div>
            <div className={stylex(styles.heroImageContainer)}>
              <img
                src={calabi}
                alt="Decentralized Cloud Computing"
                className={stylex(styles.heroImage)}
              />
            </div>
          </div>
        </Grid>
      </div>
    </Padding>
  );
}
