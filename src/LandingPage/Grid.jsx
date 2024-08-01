// @flow
import stylex from '@serpa-cloud/stylex';
import { useSpring, animated } from 'react-spring';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

import noiseUrl from './assets/noise.png';

const styles = stylex.create({
  main: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#080038',
  },
  inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: 99,
  },
  backgroundSquare: {
    position: 'absolute',
  },
});

const hexToRGBArray = function hexToRGBArray(hex) {
  const numbers = hex.replace('#', '');

  const r = numbers.substring(0, 2);
  const g = numbers.substring(2, 4);
  const b = numbers.substring(4, 6);

  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
};

const squareSize = 80;
const baseColor = '#080038';
const baseDecay = 0.65;
const borderTresshold = 4;

const baseColorArray = hexToRGBArray(baseColor);

const backGradients = [
  {
    x: 0.25,
    y: 0.25,
    decay: 0,
    hex: '#140FFF',
  },
  {
    x: 0.75,
    y: 0.75,
    decay: 0,
    hex: '#FF52CF',
  },
];

const innerGradients = [
  {
    x: 0.75,
    y: 0.75,
    decay: 0,
    hex: '#140FFF',
  },
  {
    x: 0.25,
    y: 0.25,
    decay: 0,
    hex: '#1DFF85',
  },
];

function Grid(): React$Node {
  const [[wSquares, hSquares], setSquares] = useState([0, 0]);

  const calculateSquares = useCallback(() => {
    const wSRaw = Math.ceil(window.innerWidth / squareSize);
    const hSRaw = Math.ceil(window.innerHeight / squareSize);

    const wS = wSRaw % 2 ? wSRaw : wSRaw + 1;
    const hS = hSRaw % 2 ? hSRaw : hSRaw + 1;

    setSquares([wS, hS]);
  }, []);

  useEffect(() => {
    calculateSquares();
  }, [calculateSquares]);

  useEffect(() => {
    window.addEventListener('resize', calculateSquares);

    return () => window.removeEventListener('resize', calculateSquares);
  }, [calculateSquares]);

  const squaresMatrix = useMemo(() => {
    const hSArray = hSquares ? new Array(hSquares).fill(1) : [];
    const wSArray = wSquares ? new Array(wSquares).fill(1) : [];

    return hSArray.map((_, hIndex) => {
      return wSArray.map((__, wIndex) => {
        const singleGradients = backGradients.map((point) => {
          const horizontal = Math.abs(point.x - (1 / (wSquares - 1)) * wIndex);
          const vertical = Math.abs(point.y - (1 / (hSquares - 1)) * hIndex);
          const reference = hexToRGBArray(point.hex);

          const delta = Math.sqrt(horizontal ** 2 + vertical ** 2);
          const scale = Math.min(delta / (baseDecay - point.decay), 1);

          return [
            reference[0] - (reference[0] - baseColorArray[0]) * scale,
            reference[1] - (reference[1] - baseColorArray[1]) * scale,
            reference[2] - (reference[2] - baseColorArray[2]) * scale,
          ];
        });

        const innerSingleGradients = innerGradients.map((point) => {
          const horizontal = Math.abs(point.x - (1 / (wSquares - 1)) * wIndex);
          const vertical = Math.abs(point.y - (1 / (hSquares - 1)) * hIndex);
          const delta = Math.sqrt(horizontal ** 2 + vertical ** 2);
          const reference = hexToRGBArray(point.hex);

          return {
            delta,
            reference,
          };
        });

        const innerTotalDistance = innerSingleGradients.reduce((prev, current) => {
          return prev + current.delta;
        }, 0);

        return {
          key: `${wIndex}_${hIndex}`,
          innerRGB: innerSingleGradients.reduce(
            (prev, current) => {
              const rate = 1 - current.delta / innerTotalDistance;
              return [
                prev[0] + current.reference[0] * rate,
                prev[1] + current.reference[1] * rate,
                prev[2] + current.reference[2] * rate,
              ];
            },
            [0, 0, 0],
          ),
          rgb: singleGradients.reduce(
            (prev, current, index) => {
              return [
                (prev[0] * index + current[0]) / (index + 1),
                (prev[1] * index + current[1]) / (index + 1),
                (prev[2] * index + current[2]) / (index + 1),
              ];
            },
            [0, 0, 0],
          ),
        };
      });
    });
  }, [hSquares, wSquares]);

  const [modalSpringProps] = useSpring(
    () => ({
      from: { opacity: 0.2 },
      to: { opacity: 1 },
      config: {
        mass: 2,
        friction: 40,
        tension: 140,
      },
    }),
    [],
  );

  const [innerSquareSpringProps] = useSpring(
    () => ({
      from: { w: 120 },
      to: { w: 10 },
      config: {
        mass: 20,
        friction: 120,
        tension: 280,
      },
    }),
    [],
  );

  if (!wSquares) return <div className={stylex(styles.main)} />;

  return (
    <div className={stylex(styles.main)}>
      <animated.div
        className={stylex(styles.inner)}
        style={{
          rowGap: 0,
          columnGap: 0,
          display: 'grid',
          width: `${wSquares * squareSize}px`,
          height: `${hSquares * squareSize}px`,
          gridTemplateRows: `repeat(${hSquares}, ${squareSize}px)`,
          gridTemplateColumns: `repeat(${wSquares}, ${squareSize}px)`,
          ...modalSpringProps,
        }}
      >
        {squaresMatrix.map((squareRow, rowIndex) => {
          return squareRow.map(({ key, rgb, innerRGB }, columnIndex) => {
            const isBorder =
              rowIndex < borderTresshold ||
              columnIndex < borderTresshold ||
              rowIndex >= hSquares - borderTresshold ||
              columnIndex >= wSquares - borderTresshold;

            return (
              <div
                key={key}
                style={{
                  width: squareSize,
                  height: squareSize,
                  position: 'relative',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className={stylex(styles.backgroundSquare)}
                  style={{
                    width: squareSize,
                    height: squareSize,
                    backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
                  }}
                />

                <animated.div
                  style={{
                    zIndex: 2,
                    position: 'relative',
                    width: innerSquareSpringProps.w,
                    height: innerSquareSpringProps.w,
                    borderRadius: isBorder ? 8 : 0,
                    opacity: 1,
                    backgroundColor: `rgb(${innerRGB[0]}, ${innerRGB[1]}, ${innerRGB[2]})`,
                  }}
                />
              </div>
            );
          });
        })}
      </animated.div>
      <div
        className={stylex(styles.overlay)}
        style={{
          backgroundImage: `url("${noiseUrl}")`,
        }}
      />
    </div>
  );
}

export default (memo<{}>(Grid): React$AbstractComponent<{}, mixed>);
