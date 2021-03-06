import React from 'react';
import './styles.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">
        {children}
        <div className="close" onClick={() => toggleModal()}>X</div>
      </div>
    </div>
  ];
}

export default Modal;