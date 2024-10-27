// @flow
import { useRef, useEffect } from 'react';

const ENTER = 'Enter';
const ESCAPE = 'Escape';

export type InteractiveElementEvent = (
  SyntheticMouseEvent<HTMLDivElement> | SyntheticKeyboardEvent<HTMLDivElement>,
) => void;

type Props = {
  label?: string,
  className?: string,
  disabled?: boolean,
  children: React$Node,
  +disableFocus?: ?boolean,
  +onClick?: ?InteractiveElementEvent,
  +onKeyPress?: ?InteractiveElementEvent,
  +onMouseEnter?: ?(?SyntheticMouseEvent<HTMLDivElement>) => void,
  +autoFocus?: ?boolean,
};

export default function InteractiveElement({
  label,
  onClick,
  children,
  disabled,
  className,
  onKeyPress,
  onMouseEnter,
  disableFocus,
  autoFocus,
}: Props): React$Node {
  const ref = useRef();

  function handleMouseDown(e) {
    e.preventDefault();
  }

  function handleKeyPress(event) {
    event.persist();
    const { key } = event;
    if (key === ENTER) (onKeyPress || onClick)?.(event);
    if (key === ESCAPE) event.currentTarget.blur();
  }

  function handleClick(event) {
    event.persist();
    if (onClick) onClick(event);
  }

  const tabValue = disabled ? '-1' : '0';

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={disableFocus ? '' : tabValue}
      aria-disabled={!!disabled}
      role="button"
      aria-label={label}
      className={className || ''}
      onKeyDown={handleKeyPress}
      onMouseDown={handleMouseDown}
      onMouseEnter={onMouseEnter}
      onClick={handleClick}
      style={{ cursor: 'pointer', touchAction: 'manipulation' }}
    >
      {children}
    </div>
  );
}

InteractiveElement.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  onClick: null,
  onKeyPress: null,
  autoFocus: false,
  onMouseEnter: null,
  disableFocus: false,
};
