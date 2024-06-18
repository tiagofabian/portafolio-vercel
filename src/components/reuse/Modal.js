import React from 'react';
import '../../assets/styles/reuse/modal.css';

const Modal = ({ isOpen, onClose, content, props }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={() => onClose(props.name)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={() => onClose(props.name)}>&times;</button>
        {content ? content(props) : <p>No hay contenido</p>}
      </div>
    </div>
  );
};

export default Modal;