import stylex from '@serpa-cloud/stylex';

import { Icon, Text, Flexbox, Padding } from '../shared';

import ine from '../LandingPage/assets/ine.png';
import gcp from '../LandingPage/assets/gcp.png';
import aws from '../LandingPage/assets/aws.png';
import nixtla from '../LandingPage/assets/nixtla.png';
import banorte from '../LandingPage/assets/banorte.png';
import walmart from '../LandingPage/assets/walmart.png';

const styles = stylex.create({
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--neutral-color-800)',
    '@media (max-width: 980px)': {
      fontSize: 40,
    },
  },
  tasks: {
    marginTop: 40,
  },
  testimonyContainer: {
    marginTop: 40,
  },
  dotText: {
    fontSize: 24,
    lineHeight: '1.2858342857',
    fontWeight: 300,
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: '#f7f7fc',
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
  },
  logoGrid: {
    display: 'grid',
    width: '100%',
    rowGap: 32,
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: 40,
    '@media (max-width: 860px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  logoImage: {
    width: '80%',
    opacity: 0.65,
    maxWidth: 120,
    objectFit: 'contain',
    objectPosition: 'center center',
    '@media (max-width: 860px)': {
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trustedGradient: {
    color: 'var(--neutral-color-600)',
    opacity: 0.85,
    fontSize: 18,
    '@media (max-width: 540px)': {
      fontSize: 16,
    },
  },
  trustedTitle: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    margin: 0,
    textAlign: 'center',
    fontWeight: 300,
    letterSpacing: '.4em',
    lineHeight: '1.25',
    fontVariant: 'small-caps',
  },
  card: {
    background: 'white',
    boxShadow: 'var(--shadow-1)',
  },
});

export default function Copy() {
  return (
    <div>
      <Text component="h1" id="contact.title" color="--neutral-color-800" type="h4" />
      <div className={stylex(styles.tasks)}>
        <Flexbox flexDirection="column" rowGap={24}>
          <Flexbox alignItems="center" columnGap={16}>
            <Icon icon="task_alt" size={32} weight={400} grade={-25} opticalSize={48} />

            <div>
              <Text type="s0b" color="--neutral-color-800" id="contact.dot1" />
            </div>
          </Flexbox>

          <Flexbox alignItems="center" columnGap={16}>
            <Icon icon="task_alt" size={32} weight={400} grade={-25} opticalSize={48} />

            <div>
              <Text type="s0b" color="--neutral-color-800" id="contact.dot2" />
            </div>
          </Flexbox>

          <Flexbox alignItems="center" columnGap={16}>
            <Icon icon="task_alt" size={32} weight={400} grade={-25} opticalSize={48} />

            <div>
              <Text type="s0b" color="--neutral-color-800" id="contact.dot3" />
            </div>
          </Flexbox>
        </Flexbox>
      </div>
      <div className={stylex(styles.testimonyContainer)}>
        <Flexbox flexDirection="column" rowGap={32}>
          <h2 className={stylex(styles.trustedTitle)}>
            <span className={stylex(styles.trustedGradient)}>trusted by +2,000 developers</span>
          </h2>
          <div className={stylex(styles.logoGrid)}>
            <Flexbox alignItems="center" justifyContent="center">
              <img src={walmart} alt="Walmart" height={40} className={stylex(styles.logoImage)} />
            </Flexbox>

            <Flexbox alignItems="center" justifyContent="center">
              <img src={gcp} alt="Google Cloud" height={32} className={stylex(styles.logoImage)} />
            </Flexbox>

            <Flexbox alignItems="center" justifyContent="center">
              <img src={nixtla} alt="Nixtla" height={24} className={stylex(styles.logoImage)} />
            </Flexbox>

            <Flexbox alignItems="center" justifyContent="center">
              <img src={banorte} alt="Banorte" height={24} className={stylex(styles.logoImage)} />
            </Flexbox>

            <Flexbox alignItems="center" justifyContent="center">
              <img src={aws} alt="AWS" height={40} className={stylex(styles.logoImage)} />
            </Flexbox>

            <Flexbox alignItems="center" justifyContent="center">
              <img src={ine} alt="INE" height={36} className={stylex(styles.logoImage)} />
            </Flexbox>
          </div>
          <Padding horizontal={16} vertical={24} className={stylex(styles.card)}>
            <Text type="bs">
              &quot;As a developer, I know the big challenges of creating and maintaining a
              sophisticated infrastructure today, and the importance of that process being secure,
              automated, scalable, and cost-effective.&quot;
            </Text>
            <Padding top={24}>
              <Flexbox flexDirection="column" rowGap={8}>
                <Text type="s1m" color="--neutral-color-600">
                  Santiago Zavala
                </Text>
                <Text type="s2b" color="--neutral-color-800">
                  Managing Partner, 500 Global
                </Text>
              </Flexbox>
            </Padding>
          </Padding>
        </Flexbox>
      </div>
    </div>
  );
}
