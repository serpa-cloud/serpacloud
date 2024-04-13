// @flow
import { useState, memo } from 'react';
import stylex from '@serpa-cloud/stylex';

type LayoutSize =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96
  | 104
  | 112
  | 120
  | 128
  | 136
  | 144
  | 152
  | 160
  | 168
  | 176
  | 184
  | 192
  | 200
  | 208
  | 216
  | 224
  | 232
  | 240
  | 248
  | 256
  | 264
  | 272
  | 280
  | 320;

export type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;
export type IconGrade = -25 | 0 | 200;
export type OpticalSize = 20 | 24 | 40 | 48;

type Props = {|
  fill?: boolean,
  icon: string,
  size?: LayoutSize,
  className?: string,
  weight?: IconWeight,
  grade?: IconGrade,
  opticalSize?: OpticalSize,
  color?: string,
  hoverColor?: string,
  +gradient?: ?string,
|};

const styles = stylex.create({
  parent: {
    flexShrink: 0,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    transitionProperty: 'color',
    transitionDuration: 'var(--fds-duration-short-in)',
    transitionTimingFunction: 'var(--fds-animation-fade-in)',
  },
  gradientElement: {
    backgroundClip: 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-background-clip': 'text',
  },
});

function Icon({
  icon,
  fill,
  size = 24,
  weight = 200,
  grade = 200,
  opticalSize = 24,
  className = '',
  color = '--primary-color-1',
  hoverColor,
  gradient,
}: Props): React$Node {
  const [hover, setHover] = useState(false);
  const style = {
    fontSize: size,
    color: `var(${hover ? hoverColor || color : color})`,
    fontVariationSettings: `"FILL" ${
      fill ? 1 : 0
    }, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${opticalSize}`,
    backgroundImage: gradient ?? 'none',
  };

  return (
    <div
      style={{ width: size, height: size }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={stylex(styles.parent)}
    >
      <i
        className={`material-symbols-outlined ${className} ${stylex(
          styles.icon,
          gradient ? styles.gradientElement : null,
        )}`}
        style={style}
      >
        {icon}
      </i>
    </div>
  );
}

Icon.defaultProps = {
  fill: false,
  size: 24,
  weight: 200,
  grade: 200,
  opticalSize: 24,
  className: '',
  gradient: null,
  color: '--primary-color-1',
  hoverColor: '',
};

export default (memo<Props>(Icon): React$AbstractComponent<Props, mixed>);
