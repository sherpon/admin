export const getDevice = () => {
  const width = window.innerWidth;
  if ( 0 < width && width < 550 ) {
    return 'mobile';
  } else if ( 550 <= width && width < 750 ) {
    return 'tablet';
  } else {
    // if ( 750 <= width ) 
    return 'desktop';
  }
};

export const getLength = (device) => {
  const dashboardWidth = document.querySelector('.dashboard__body').offsetWidth;
  let length = 100;
  switch (device) {
    case 'mobile':
      length = (dashboardWidth - 30)/2;
      break;

    case 'mobile':
      length = (dashboardWidth - 40)/3;
      break;

    case 'desktop':
      length = (dashboardWidth - 100)/4;
      break;
  
    default:
      length = 100;
      break;
  }
  return length;
};