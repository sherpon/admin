import React from 'react';

import './spinner.scss';

const SpinnerPage = ({}) => {
  return(
    <div className="spinner-page">
      <div className="spinner-page__wrapper">
        <div className="cp-spinner cp-skeleton"></div>
      </div>
    </div>
  );
};

export default SpinnerPage;