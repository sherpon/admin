import React from 'react';

import './spinner.scss';

const Spinner = ({isFetching}) => {
  if (isFetching) {
    return(
      <div className="spinner-overlay">
        <div className="cp-spinner cp-skeleton"></div>
      </div>
    );
  } else {
    return(<React.Fragment/>);
  }
  
};

export default Spinner;