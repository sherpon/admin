/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
import './modal.scss';
/** files */
/** strings */

const Modal = ({show, size, handleCloseModal, title, content, footer}) => {
  const showClass = show ? 'show' : '' ;

  return(
    <div className={`modal-wrapper ${showClass}`}>
      <div className={`modal-overlay ${showClass}`} onClick={ () => handleCloseModal() }></div>
      <div className={`modal ${size} ${showClass}`}>
        <div className="modal__title"><h4>{title}</h4></div>
        <div className="modal__content">{content}</div>
        <div className="modal__footer">{footer}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  title: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
};

Modal.defaultProps = {
  size: 'large'
};

export default Modal;