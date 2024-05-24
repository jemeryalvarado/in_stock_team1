import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, warehouse_name, id }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <span>
          Delete {warehouse_name} warehouse?
        </span>
        <span>
          Please confirm that you’d like to delete the {warehouse_name} from the list of warehouses.
          You won’t be able to undo this action.
        </span>
        <button>
          Cancel
        </button>
        <button>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;