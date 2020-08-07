import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// LEAVE OUT 
const config = {};

//initailize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authenication utility
const provider = new firebase.auth.GoogleAuthProvider();
// prompt google popup when sign in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
