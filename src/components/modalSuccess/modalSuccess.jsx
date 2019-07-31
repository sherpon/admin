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
import './modalSuccess.scss';
/** files */
import successPicture from './images/checked.svg';
/** strings */

const ModalSuccess = ({message, handleModalSuccessClose}) => {
  const showClass = (message === '') ? '' : 'show' ;

  return(
    <div id="success-modal__wrapper" className={`success-modal__wrapper ${showClass}`}>
      <div id="success-modal__overlay" className={`success-modal__overlay ${showClass}`} onClick={ () => handleModalSuccessClose() }></div>
      <div className={`sherpon-card success-modal__modal ${showClass}`}>
        <img  className="success-modal__picture" src={successPicture} alt="sherpon success modal"/>
        <div id="success-modal__message" className="success-modal__message">{message}</div>
        <div id="success-modal__close" className="success-modal__close" onClick={ () => handleModalSuccessClose() }>Ok</div>
      </div>
    </div>
  );
};

ModalSuccess.propTypes = {
  message: PropTypes.string.isRequired,
  handleModalSuccessClose: PropTypes.func.isRequired,
};

export default ModalSuccess;