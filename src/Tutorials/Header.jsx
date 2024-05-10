// @flow
import stylex from '@serpa-cloud/stylex';
import { Text, Grid, Flexbox, Padding, Margin } from '../shared';

import calabi from '../LandingPage/assets/calabi.png';

const styles = stylex.create({
  header: {
    width: '100%',
    position: 'relative',
    maxWidth: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    // marginTop: -120,
    aspectRatio: '1.09',
    '@media (max-width: 860px)': {
      maxWidth: 360,
      // marginTop: -56,
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
});

export default function Header() {
  return (
    <Margin bottom={32}>
      <Padding vertical={32} className={stylex(styles.header)} left={24}>
        <div className={stylex(styles.container)}>
          <Grid columns="1fr 1fr">
            <Flexbox justifyContent="center" flexDirection="column" rowGap={16}>
              <Text type="h2" color="--neutral-color-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text type="bl" color="--neutral-color-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt felis
                justo, eget fringilla lorem facilisis eu.
              </Text>
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
    </Margin>
  );
}
