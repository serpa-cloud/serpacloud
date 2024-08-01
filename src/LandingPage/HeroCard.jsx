// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import noiseUrl from './assets/noise.png';

type Props = {|
  children: React$Node,
  className?: ?string,
|};

const styles = stylex.create({
  viewport: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 0,
    boxShadow: 'var(--shadow-1)',
    position: 'relative',
    backgroundPositionX: 'center',
    backgroundPositionY: 'top',
    backgroundAttachment: 'fixed',
    maxWidth: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

function HeroCard({ children, className }: Props): React$Node {
  return (
    <div
      className={`${stylex(styles.viewport)} LIGHT ${className ?? ''}`}
      style={{
        backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
      }}
    >
      {children}
    </div>
  );
}

HeroCard.defaultProps = {
  className: '',
};

export default (memo<Props>(HeroCard): React$AbstractComponent<Props, mixed>);
