/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import stylex from '@serpa-cloud/stylex';
import { useSpring, animated } from 'react-spring';

import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl/maplibre';
import { useState, useRef, useEffect, memo } from 'react';

import { Icon } from '../../shared';

import data from './manhattan.json';
import mapStyle from './mapStyle.json';

import noiseUrl from '../assets/noise.png';

import OS from './OS';

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
  container: {
    position: 'relative',
    backgroundColor: 'rgba(14, 13, 31, 1)',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-1)',
  },
  mapSticky: {
    width: '100%',
    height: '100vh',
    maxHeight: '1920px',
    position: 'sticky',
    top: 0,
  },
  mapViewport: {
    width: '100%',
    height: '100vh',
    maxHeight: '1920px',
    overflow: 'hidden',
  },
  mapContainer: {
    width: '100vw',
    height: '100vh',
    maxHeight: '1920px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  innerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#080038',
    opacity: 0.15,
  },
  mainContent: {
    position: 'relative',
    zIndex: 2,
    marginTop: 'max(-960px, -50vh)',
    boxShadow: 'var(--shadow-2)',
    backgroundColor: 'rgba(14, 13, 31, 1)',
  },

  innerContent: {
    zIndex: 3,
    position: 'relative',
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
  title: {
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 120,
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: '-0.005em',
    lineHeight: '1.2814285714',
    color: 'var(--always-white)',
    '@media (max-width: 980px)': {
      paddingTop: 72,
      fontSize: 40,
    },
  },
  titleGradient: {
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
    backgroundImage:
      'linear-gradient(270deg, var(--orange-solid-color) 0%, var(--pink-solid-color) 100%)',
  },
  description: {
    fontSize: 24,
    lineHeight: '1.2858342857',
    fontWeight: 400,
    letterSpacing: '.007em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: '#f7f7fc',
    '@media (max-width: 920px)': {
      fontSize: 20,
    },
  },
  centered: {
    maxWidth: 1344,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  benefitDescription: {
    width: '100%',
    fontSize: 18,
    lineHeight: '1.381002381',
    fontWeight: 300,
    letterSpacing: '.011em',
    fontFamily: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    color: 'var(--neutral-color-100)',
    maxWidth: 360,
    margin: 0,
    textAlign: 'center',
  },
  benefitHighlight: {
    fontWeight: 600,
    color: 'var(--neutral-color-100)',
  },
  benefit: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 96,
    paddingBottom: 96,
    border: '1px solid #322c5b',
    backgroundImage: 'linear-gradient(45deg, rgb(14 13 31) 50%, rgb(43 43 90) 100%)',
    boxShadow: '0px 2px 10px 2px rgba(33, 31, 84, 0.6), 0px 0px 40px 0px rgba(33, 31, 84, 0.4)',
    transitionProperty: 'transform',
    transitionDuration: 'var(--fds-duration-medium-in)',
    transitionTimingFunction: 'var(--fds-animation-expand-collapse-in)',
    ':hover': {
      transform: 'scale(1.05)',
      transitionTimingFunction: 'var(--fds-animation-expand-collapse-out)',
    },
    '@media (max-width: 1024px)': {
      paddingTop: 48,
      paddingBottom: 48,
    },
    '@media (max-width: 760px)': {
      paddingTop: 32,
      paddingBottom: 32,
    },
  },

  lastBenefit: {
    '@media (max-width: 1024px)': {
      gridColumn: '1 / span 2',
    },
    '@media (max-width: 760px)': {
      gridColumn: '1 / span 1',
    },
  },

  benefitsContainer: {
    marginTop: 80,
    display: 'grid',
    columnGap: '40px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    '@media (max-width: 1200px)': {
      marginTop: 56,
      columnGap: '24px',
    },
    '@media (max-width: 1024px)': {
      rowGap: 40,
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 760px)': {
      gridTemplateColumns: '1fr',
    },
  },

  contentContainer: {
    position: 'relative',
    zIndex: 2,
  },
});

function NetworkMap(): React$Node {
  const [view, setView] = useState(INITIAL_VIEW_STATE);

  const viewRef = useRef();
  const scheduledAnimationFrame = useRef<boolean>(false);

  const [centeredStyles, animateCentered] = useSpring(
    () => ({
      maxWidth: '1344px',
    }),
    [],
  );

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

      const centeredTopReference = top - window.innerHeight * 0.1;

      if (centeredTopReference <= 80 && centeredTopReference >= window.innerHeight * -0.55) {
        const spaceDifference = Math.min(window.innerWidth, 1800) - 1344;

        const maxW =
          Math.max(Math.min((centeredTopReference * 1.2) / window.innerHeight / -0.5, 1), 0) *
            spaceDifference +
          1344;

        animateCentered.start({
          maxWidth: `${maxW}px`,
        });
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
  }, [animateCentered]);

  const [layers, setLayers] = useState([]);

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
    <section className={stylex(styles.root)}>
      <div className={stylex(styles.container)} ref={viewRef}>
        <div className={stylex(styles.mapSticky)}>
          <div className={stylex(styles.mapViewport)}>
            <div className={stylex(styles.mapContainer)}>
              <DeckGL
                controller
                layers={layers}
                initialViewState={INITIAL_VIEW_STATE}
                viewState={view}
                style={{ width: '100%', height: '100%', maxWidth: '1800px' }}
                useDevicePixels={false}
              >
                <Map reuseMaps mapStyle={mapStyle} />
              </DeckGL>
            </div>
          </div>
        </div>

        <div className={stylex(styles.contentContainer)}>
          <animated.div
            className={stylex(styles.centered, styles.mainContent)}
            style={centeredStyles}
          >
            <div className={stylex(styles.innerContent)}>
              <h2 className={stylex(styles.title)}>
                <span>{`We are building the largest `}</span>

                <span className={stylex(styles.titleGradient)}>Cloud Computing Network</span>
              </h2>
              <p className={stylex(styles.description)}>
                Pooling resources from centralized public cloud providers with decentralized edge
                nodes located close to users. Starting from a first principles approach, we are
                building the first cloud-native cloud computing company – a truly performant cloud.
              </p>

              <div className={stylex(styles.benefitsContainer)}>
                <div className={stylex(styles.benefit)}>
                  <Icon
                    icon="neurology"
                    color="--always-white"
                    weight={100}
                    grade={-25}
                    size={80}
                    opticalSize={48}
                    gradient="linear-gradient(45deg, var(--red-solid-color) 0%, var(--yellow-solid-color) 100%)"
                  />

                  <p className={stylex(styles.benefitDescription)}>
                    <span>{`As AI transforms companies, `}</span>

                    <span className={stylex(styles.benefitHighlight)}>
                      infra should evolve as well.
                    </span>
                  </p>
                </div>

                <div className={stylex(styles.benefit)}>
                  <Icon
                    icon="computer"
                    color="--always-white"
                    weight={100}
                    grade={-25}
                    size={80}
                    opticalSize={48}
                    gradient="linear-gradient(45deg, var(--blue-solid-color) 0%, var(--cyan-solid-color) 100%)"
                  />

                  <p className={stylex(styles.benefitDescription)}>
                    <span>{`There's abundant computing `}</span>

                    <span className={stylex(styles.benefitHighlight)}>
                      {`all around us, but it's inaccessible.`}
                    </span>
                  </p>
                </div>

                <div className={stylex(styles.benefit, styles.lastBenefit)}>
                  <Icon
                    icon="public"
                    color="--always-white"
                    weight={100}
                    grade={-25}
                    size={80}
                    opticalSize={48}
                    gradient="linear-gradient(45deg, var(--blue-solid-color) 0%, var(--pink-solid-color) 100%)"
                  />

                  <p className={stylex(styles.benefitDescription)}>
                    <span>{`The closer the server is to users, `}</span>

                    <span className={stylex(styles.benefitHighlight)}>lower the latency.</span>
                  </p>
                </div>
              </div>
            </div>

            <OS />
          </animated.div>
        </div>

        <div
          className={stylex(styles.overlay)}
          style={{
            backgroundImage: `url("${noiseUrl}")`,
          }}
        />
      </div>
    </section>
  );
}

export default (memo<{}>(NetworkMap): React$AbstractComponent<{}, mixed>);
