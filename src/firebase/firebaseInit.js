import { getConfig } from './firebaseConfig'

const firebaseInit = () => {

  if (!firebase.apps.length) {
    firebase.initializeApp( getConfig().FIREBASE_CONFIG )
  }

  return firebase;
}

firebaseInit();
