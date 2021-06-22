import React from 'react';
import Modal from 'react-modal';

import classes from './styles.module.scss';

Modal.setAppElement('#__next');

const ModalContainer = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={classes.Modal}
      overlayClassName={classes.Overlay}
      contentLabel="Post modal"
    >
      <i className={classes.closeIcon} onClick={onRequestClose}>
        Close
      </i>
      {children}
    </Modal>
  );
};

export default ModalContainer;
