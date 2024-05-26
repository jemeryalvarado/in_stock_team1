import React, { useState } from 'react';
import './Modal.scss';
import closeIcon from '../../assets/icons/close-24px.svg'

const Modal = ({ modalIsOpen, closeModal, id, children, deleteElement, ...props }) => {

  if (!modalIsOpen) {
    return null;
  }

  const deleteHandler = () => {
    deleteElement(props.elementType, id);
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className='modal-grid'>
        <div className="modal-grid__content" onClick={(e) => e.stopPropagation()}>
          <div className='modal-grid__content-wrapper'>
            <div className="modal-grid__content-close" onClick={closeModal}>
              <img src={closeIcon} alt='close'/>
            </div>
            {children}
          </div>
          <div className='modal-grid__button'>
            <button className='modal-grid__button-cancel' onClick={closeModal}>
              Cancel
            </button>
            <button className='modal-grid__button-delete' onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;