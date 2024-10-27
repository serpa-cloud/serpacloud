// @flow
import React from 'react';
import stylex from '@serpa-cloud/stylex';
import Text from './Text';
import Button from './Button';

const styles = stylex.create({
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    boxShadow: 'var(--shadow-2)',
    maxWidth: 500,
    width: '100%',
  },
});

type Props = {
  children: React$Node,
  onClose: () => void,
};

const Modal = ({ children, onClose }: Props): React$Node => (
  <div className={stylex(styles.modalOverlay)} onClick={onClose}>
    <div className={stylex(styles.modalContent)} onClick={(e) => e.stopPropagation()}>
      {children}
      <Button buttonType="primary" onClick={onClose}>
        Close
      </Button>
    </div>
  </div>
);

export default Modal;
