
const firebaseInit = () => {

  if (!firebase.apps.length) {
    const firebaseConfig = require(process.env.FIREBASE_CONFIG_PATH);
    firebase.initializeApp(firebaseConfig)
  }
  return firebase;
}

firebaseInit();
