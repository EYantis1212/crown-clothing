import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyDt-HLSv_YrJaUBUK7bOycQqCPrJRWfChQ',
    authDomain: 'crown-db-3765e.firebaseapp.com',
    projectId: 'crown-db-3765e',
    storageBucket: 'crown-db-3765e.appspot.com',
    messagingSenderId: '619901527025',
    appId: '1:619901527025:web:1bad531e7907b48c78da50',
    measurementId: 'G-G0LMCM09MR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
