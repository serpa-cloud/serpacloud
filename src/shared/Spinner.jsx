// @flow
import stylex from '@serpa-cloud/stylex';

import type { LayoutSize } from './Flexbox';

const styles = stylex.create({
  spinner: {
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationName: stylex.keyframes({
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(270deg)',
      },
    }),
  },
  path: {
    strokeDasharray: 187,
    strokeDashoffset: 0,
    transformOrigin: 'center',
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: stylex.keyframes({
      '0%': {
        strokeDashoffset: 187,
      },
      '50%': {
        strokeDashoffset: 46.75,
        transform: 'rotate(135deg)',
      },
      '100%': {
        strokeDashoffset: 187,
        transform: 'rotate(450deg)',
      },
    }),
  },
});

type Props = {|
  color?: ?string,
  size?: ?LayoutSize,
|};

export default function Spinner({ color, size = 24 }: Props): React$Node {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      className={stylex(styles.spinner)}
    >
      <circle
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
        stroke={color || 'var(--primary-color-1)'}
        className={stylex(styles.path)}
      />
    </svg>
  );
}

Spinner.defaultProps = {
  color: '',
  size: 24,
};
