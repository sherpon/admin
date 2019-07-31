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
import './modalError.scss';
/** files */
import errorPicture from './images/error.svg';
/** strings */

const ModalError = ({error, handleErrorClose}) => {
  const showClass = (error === '') ? '' : 'show' ;

  return(
    <div id="error-modal__wrapper" className={`error-modal__wrapper ${showClass}`}>
      <div id="error-modal__overlay" className={`error-modal__overlay ${showClass}`} onClick={ () => handleErrorClose() }></div>
      <div className={`sherpon-card error-modal__modal ${showClass}`}>
        <img  className="error-modal__picture" src={errorPicture} alt="sherpon error modal"/>
        <div id="error-modal__message" className="error-modal__message">{error}</div>
        <div id="error-modal__close" className="error-modal__close" onClick={ () => handleErrorClose() }>Ok</div>
      </div>
    </div>
  );
};

ModalError.propTypes = {
  error: PropTypes.string.isRequired,
  handleErrorClose: PropTypes.func.isRequired,
};

export default ModalError;