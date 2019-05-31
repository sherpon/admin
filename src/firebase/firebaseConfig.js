const STATE_PRODUCTION = 'production';
const STATE_STAGING = 'staging';
const STATE_DEVELOPMENT = 'development';

const PROD_CONFIG = {
  "COLLECTION_USERS":"users",
  "COLLECTION_SITES":"sites",
  "FIREBASE_CONFIG":{}
};

const STAGING_CONFIG = {
  "COLLECTION_USERS":"staging_users",
  "COLLECTION_SITES":"staging_sites",
  "FIREBASE_CONFIG":{
    apiKey: "AIzaSyDT_QB7fU9gLgi6ZjtxkhTXxh4LLBmkt4A",
    authDomain: "sherpon-staging.firebaseapp.com",
    databaseURL: "https://sherpon-staging.firebaseio.com",
    projectId: "sherpon-staging",
    storageBucket: "",
    messagingSenderId: "760710359590",
    appId: "1:760710359590:web:b44b3369d3e44cad"
  }
};

const DEV_CONFIG = {
  "COLLECTION_USERS":"dev_users",
  "COLLECTION_SITES":"dev_sites",
  "FIREBASE_CONFIG":{
    apiKey: "AIzaSyDT_QB7fU9gLgi6ZjtxkhTXxh4LLBmkt4A",
    authDomain: "sherpon-staging.firebaseapp.com",
    databaseURL: "https://sherpon-staging.firebaseio.com",
    projectId: "sherpon-staging",
    storageBucket: "",
    messagingSenderId: "760710359590",
    appId: "1:760710359590:web:b44b3369d3e44cad"
  }
};

export const getConfig = () => {
  window.sherponEnv = process.env.NODE_ENV
  if ( process.env.NODE_ENV === STATE_DEVELOPMENT ) {  //DEV
    return DEV_CONFIG;
  } else {
    if (localStorage.getItem('stagingConfig')!==null) {
      return STAGING_CONFIG;
    } else {
      return PROD_CONFIG;
    }
  }
};
