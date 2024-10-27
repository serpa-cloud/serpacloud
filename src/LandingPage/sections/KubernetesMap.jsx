// @flow

import DeckGL from '@deck.gl/react';
import { useIntl } from 'react-intl';
import stylex from '@serpa-cloud/stylex';
import { memo, useRef, useState, useEffect } from 'react';

import { Icon, Flexbox } from '../../shared';

import gcp from '../assets/gcpWhite.png';
import aws from '../assets/awsWhite.png';
import azure from '../assets/azureWhite.png';

import { ReactComponent as DockerLandingIcon } from '../assets/dockerLanding.svg';
import { ReactComponent as KubernetesLandingIcon } from '../assets/k8s.svg';

import noiseUrl from '../assets/noise.png';

type MapViewState = {
  longitude: number,
  latitude: number,
  zoom: number,
  pitch?: number,
  bearing?: number,
  minZoom?: number,
  maxZoom?: number,
  minPitch?: number,
  maxPitch?: number,
  position?: number[],
};

type Color =
  | [number, number, number]
  | [number, number, number, number]
  | Uint8Array
  | Uint8ClampedArray;

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -73.97,
  latitude: 40.77,
  zoom: 14.85,
  minZoom: 5,
  pitch: 52.5,
  bearing: -27,
};

export const colorRange: Color[] = [
  [29, 255, 133],
  [0, 194, 255],
  [255, 82, 207],
];

type DataPoint = [number, number];

const coverage = 0.3;
const radius = 45;

const styles = stylex.create({
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  innerContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 32,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--secondary-color-3)',
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
  titleHeadline: {
    color: 'var(--neutral-color-800)',
  },
  titleHighlight: {
    color: 'var(--secondary-color-3)',
  },
  description: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 16,
    lineHeight: 1.4,
    color: 'var(--neutral-color-600)',
    '@media (max-width: 980px)': {
      textAlign: 'left',
    },
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
    '@media (max-width: 600px)': {
      fontSize: 16,
    },
  },

  icon: {
    display: 'inline-block',
    marginBottom: -12,

    '@media (max-width: 980px) and (min-width: 480px)': {
      width: '32px!important',
      height: '32px!important',
      marginBottom: -7,
    },

    '@media (max-width: 480px) and (min-width: 400px)': {
      width: '28px!important',
      height: '28px!important',
      marginBottom: -7,
    },
    '@media (max-width: 400px)': {
      width: '24px!important',
      height: '24px!important',
      marginBottom: -6,
    },
  },
  iconElement: {
    fontSize: 48,
    '@media (max-width: 980px) and (min-width: 480px)': {
      fontSize: '32px!important',
    },
    '@media (max-width: 480px) and (min-width: 400px)': {
      fontSize: '28px!important',
    },
    '@media (max-width: 400px)': {
      fontSize: '24px!important',
    },
  },
  enterpriseContainer: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  enterprise: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 24,
    border: '1px solid #322c5b',
    boxShadow: 'var(--shadow-1)',
    color: 'var(--neutral-color-800)',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 28,
    fontWeight: 600,
    '@media (max-width: 600px) and (min-width: 400px)': {
      fontSize: 24,
    },
    '@media (max-width: 400px)': {
      fontSize: 20,
    },
  },
  feature: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    border: '1px solid rgb(201 204 223)',
    boxShadow: 'var(--shadow-1)',
  },
  featureHeadline: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 16,
    fontWeight: 400,
    color: 'var(--neutral-color-600)',
    margin: 0,
    '@media (max-width: 480px)': {
      fontSize: 14,
    },
  },
  featureTitle: {
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 22,
    fontWeight: 500,
    color: 'var(--neutral-color-600)',
    marginTop: 16,
    marginBottom: 0,
    lineHeight: '1.4',
    '@media (max-width: 920px)': {
      fontSize: 18,
    },
    '@media (max-width: 480px)': {
      fontSize: 16,
    },
  },

  mapTitle: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,

    '@media (max-width: 860px) and (min-width: 400px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '@media (max-width: 400px)': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  mapContent: {
    position: 'relative',
    zIndex: 2,
  },
  gridFeatures: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 24,
    rowGap: 20,
    marginTop: 40,
    '@media (max-width: 920px)': {
      gridTemplateColumns: '1fr',
    },
  },
  featureTitleHighlight: {
    color: 'var(--secondary-color-3)',
  },
  mapRootContainer: {
    marginTop: 40,
    position: 'relative',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapCard: {
    // background: 'rgba(14, 13, 31, 0.65)',
    paddingTop: 20,
    paddingBottom: 20,
  },
  grid: {
    marginTop: 32,
    marginBottom: 40,
    display: 'grid',
    columnGap: '32px',
    rowGap: 24,
    '@media (min-width: 920px)': {
      gridTemplateColumns: 'repeat(10, 1fr)',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
    '@media (max-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '20px',
      marginTop: 24,
    },
  },
  gridElement: {
    display: 'flex',
    alignItems: 'center',
  },
  gridElement1: {
    '@media (min-width: 920px)': {
      gridColumn: '1 / span 2',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridColumn: '1 / span 2',
    },
  },
  gridElement2: {
    '@media (min-width: 920px)': {
      gridColumn: '3 / span 2',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridColumn: '3 / span 2',
    },
  },
  gridElement3: {
    '@media (min-width: 920px)': {
      gridColumn: '5 / span 2',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridColumn: '5 / span 2',
    },
  },
  gridElement4: {
    '@media (min-width: 920px)': {
      gridColumn: '7 / span 2',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridColumn: '2 / span 2',
    },
  },
  gridElement5: {
    '@media (min-width: 920px)': {
      gridColumn: '9 / span 2',
    },
    '@media (max-width: 920px) and (min-width: 640px)': {
      gridColumn: '4 / span 2',
    },
    '@media (max-width: 640px)': {
      gridColumn: '1 / span 2',
    },
  },
  svgIcon: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 32,
    fill: 'var(--neutral-color-600)',
    opacity: 0.75,
    objectFit: 'contain',
    objectPosition: 'center center',
    '@media (max-width: 640px)': {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  enterpriseHighlight: {
    color: 'var(--secondary-color-3)',
    fontWeight: '600',
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundImage:
      'linear-gradient(270deg, var(--orange-solid-color) 0%, var(--pink-solid-color) 100%)',
  },
  enterpriseBreak: {
    '@media (min-width: 920px)': {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    paddingBottom: 40,
    boxSizing: 'border-box',
    marginTop: 40,
    '@media (max-width: 680px)': {
      display: 'block',
      width: '100%',
    },
  },

  mainButton: {
    letterSpacing: '.4em',
    lineHeight: '0.85',
    fontVariant: 'small-caps',
    paddingLeft: 40,
    paddingRight: 40,
    height: 64,
    color: 'var(--neutral-color-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: 20,
    fontWeight: 500,
    boxSizing: 'border-box',
    boxShadow: 'var(--shadow-1)',
    background: 'linear-gradient(20deg,var(--primary-color-1) 0,var(--secondary-color-3) 100%)',
    '@media (max-width: 680px)': {
      width: '100%',
    },
    '@media (max-width: 680px) and (min-width: 540px)': {
      fontSize: 18,
    },
    '@media (max-width: 540px)': {
      height: 48,
      fontSize: 16,
    },
    '@media (max-width: 400px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

function KubernetesMap(): React$Node {
  const intl = useIntl();

  const [layers, setLayers] = useState([]);
  const [view, setView] = useState(INITIAL_VIEW_STATE);

  const viewRef = useRef();
  const scheduledAnimationFrame = useRef<boolean>(false);

  useEffect(() => {
    function handler() {
      const top = viewRef?.current?.getBoundingClientRect()?.top ?? 0 - 164;

      if (top <= window.innerHeight * 0.75 && top >= window.innerHeight * -1) {
        setView((s) => ({
          ...s,
          bearing: Math.max(Math.min(30, (top * -90) / window.innerHeight - 0), -27),
          zoom: (top * 1.0) / window.innerHeight + 14.1,
          pitch: (top * 30.0) / window.innerHeight + 30,
        }));
      }

      scheduledAnimationFrame.current = false;
    }

    function onScroll() {
      if (!scheduledAnimationFrame.current) {
        scheduledAnimationFrame.current = true;
        requestAnimationFrame(handler);
      }
    }

    window?.addEventListener('scroll', onScroll);
    return () => {
      window?.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    import('@deck.gl/aggregation-layers').then((o) => {
      setLayers(
        new o.HexagonLayer<DataPoint>({
          id: 'heatmap',
          colorRange,
          coverage,
          data,
          extruded: false,
          pickable: false,
          radius,
          getPosition: (d) => d,
        }),
      );
    });
  }, []);

  return (
    <section>
      <div className={stylex(styles.mapTitle)}>
        <h2 className={stylex(styles.title)}>
          <div className={stylex(styles.titleHeadline)}>
            {intl.formatMessage({ id: 'landing.kubernetes.headline' })}
          </div>
          <div className={stylex(styles.titleHighlight)}>
            {intl.formatMessage({ id: 'landing.kubernetes.subheadline' })}
          </div>
        </h2>

        <p className={stylex(styles.description)}>
          {intl.formatMessage({ id: 'landing.kubernetes.description' }, { br: () => <br /> })}
        </p>

        <div className={stylex(styles.grid)}>
          <div className={stylex(styles.gridElement, styles.gridElement1)}>
            <DockerLandingIcon width={120} height={120} className={stylex(styles.svgIcon)} />
          </div>
          <div className={stylex(styles.gridElement, styles.gridElement2)}>
            <KubernetesLandingIcon width={120} height={120} className={stylex(styles.svgIcon)} />
          </div>

          <div className={stylex(styles.gridElement, styles.gridElement3)}>
            <img src={gcp} alt="Google Cloud" height={120} className={stylex(styles.svgIcon)} />
          </div>

          <div className={stylex(styles.gridElement, styles.gridElement4)}>
            <img src={aws} alt="AWS" height={120} className={stylex(styles.svgIcon)} />
          </div>

          <div className={stylex(styles.gridElement, styles.gridElement5)}>
            <img src={azure} alt="Azure" height={120} className={stylex(styles.svgIcon)} />
          </div>
        </div>

        <div className={stylex(styles.gridFeatures)}>
          <div className={stylex(styles.feature)}>
            <Flexbox alignItems="center" columnGap={4}>
              <Icon icon="room_preferences" weight={100} color="--neutral-color-600" size={20} />
              <h3 className={stylex(styles.featureHeadline)}>
                {intl.formatMessage({ id: 'landing.kubernetes.managed.headline' })}
              </h3>
            </Flexbox>
            <h4 className={stylex(styles.featureTitle)}>
              {intl.formatMessage(
                { id: 'landing.kubernetes.managed.title' },
                {
                  strong: (str) => (
                    <>
                      <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                    </>
                  ),
                },
              )}
            </h4>
          </div>

          <div className={stylex(styles.feature)}>
            <Flexbox alignItems="center" columnGap={4}>
              <Icon icon="public" weight={100} color="--neutral-color-600" size={20} />
              <h3 className={stylex(styles.featureHeadline)}>
                {intl.formatMessage({ id: 'landing.kubernete.deliver.headline' })}
              </h3>
            </Flexbox>
            <h4 className={stylex(styles.featureTitle)}>
              {intl.formatMessage(
                { id: 'landing.kubernete.deliver.title' },
                {
                  strong: (str) => (
                    <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                  ),
                },
              )}
            </h4>
          </div>

          <div className={stylex(styles.feature)}>
            <Flexbox alignItems="center" columnGap={4}>
              <Icon icon="rocket_launch" weight={100} color="--neutral-color-600" size={20} />
              <h3 className={stylex(styles.featureHeadline)}>
                {intl.formatMessage({ id: 'landing.kubernete.scaling.headline' })}
              </h3>
            </Flexbox>
            <h4 className={stylex(styles.featureTitle)}>
              {intl.formatMessage(
                { id: 'landing.kubernete.scaling.title' },
                {
                  strong: (str) => (
                    <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                  ),
                },
              )}
            </h4>
          </div>

          <div className={stylex(styles.feature)}>
            <Flexbox alignItems="center" columnGap={4}>
              <Icon icon="vpn_lock" weight={100} color="--neutral-color-600" size={20} />
              <h3 className={stylex(styles.featureHeadline)}>
                {intl.formatMessage({ id: 'landing.kubernetes.production.headline' })}
              </h3>
            </Flexbox>
            <h4 className={stylex(styles.featureTitle)}>
              {intl.formatMessage(
                { id: 'landing.kubernetes.production.title' },
                {
                  strong: (str) => (
                    <>
                      <strong className={stylex(styles.featureTitleHighlight)}>{str}</strong>
                    </>
                  ),
                },
              )}
            </h4>
          </div>
        </div>

        <div className={stylex(styles.toolbar)}>
          <a href="https://app.serpa.cloud/session/signup" className={stylex(styles.mainButton)}>
            {intl.formatMessage({ id: 'landing.signup.callToAction' })}
          </a>
        </div>
      </div>
    </section>
  );
}

export default (memo<{}>(KubernetesMap): React$AbstractComponent<{}, mixed>);
