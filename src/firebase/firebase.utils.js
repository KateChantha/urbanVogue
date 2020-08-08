import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// LEAVE OUT 
const config = {

};

// make an API request
// save userAuth object and additaionaldata obj to database
export const createUserProfileDocument = async (userAuth, additonalData) => {
  // checkk if object is null-user sign out, then exit this fucntion
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // "get" "snapshot" obj that reference user data
  const snapShot = await userRef.get();

  // if user not already in the data base, then create it
  // "set" "document" obj to create user data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  // return userRef incase we need to do something with data
  return userRef;
}

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
