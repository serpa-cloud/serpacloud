// @flow
import { useEffect } from 'react';
import stylex from '@serpa-cloud/stylex';
import { useTransition, animated, config } from 'react-spring';

import Card from './Card';

type Props = {|
  +open: boolean,
  +onClose: (SyntheticMouseEvent<HTMLElement>) => void,
  +className?: ?string,
  +children: React$Node,
  +containerHeight: number,
  +anchor?: ?('LEFT' | 'RIGHT' | 'BOTTOM'),
|};

const styles = stylex.create({
  containerLeft: {
    position: 'absolute',
    left: 0,
    zIndex: 999,
    transformOrigin: 'left top',
  },
  containerRight: {
    position: 'absolute',
    right: 0,
    zIndex: 999,
    transformOrigin: 'right top',
  },
  containerBottom: {
    position: 'absolute',
    right: 0,
    left: 0,
    botom: 0,
    zIndex: 999,
    transformOrigin: 'right top',
  },
});

export default function ContextualMenu({
  open,
  anchor,
  onClose,
  children,
  className,
  containerHeight,
}: Props): React$Node {
  const transitions = useTransition(open, {
    from: { opacity: 0, y: -24, scale: 0.9 },
    enter: { opacity: 1, y: 0, scale: 1 },
    leave: { opacity: 0, y: 0, scale: 1 },
    config: config.stiff,
  });

  useEffect(() => {
    const handler = function handler(e) {
      if (onClose && open) onClose(e);
    };
    if (open) window.addEventListener('click', handler);

    return () => window.removeEventListener('click', handler);
  }, [onClose, open]);

  return transitions(
    (animatedStyles, item) =>
      item && (
        <animated.div
          className={stylex(anchor === 'RIGHT' ? styles.containerRight : styles.containerLeft)}
          style={{ ...animatedStyles, top: containerHeight }}
          onClick={(e) => e.stopPropagation()}
        >
          <Card className={className ?? ''}>{children}</Card>
        </animated.div>
      ),
  );
}

ContextualMenu.defaultProps = {
  className: '',
  anchor: 'LEFT',
};
