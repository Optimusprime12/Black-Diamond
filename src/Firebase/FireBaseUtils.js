import  firebase from "firebase/app";
import '@firebase/firestore'
import 'firebase/storage';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyC_ZOmMH_SkX7E7UfwWEohzgOk05jz3D8c",
    authDomain: "blackdiamond-db.firebaseapp.com",
    databaseURL: "https://blackdiamond-db.firebaseio.com",
    projectId: "blackdiamond-db",
    storageBucket: "blackdiamond-db.appspot.com",
    messagingSenderId: "898052669523",
    appId: "1:898052669523:web:93800033d174d7346846a6",
    measurementId: "G-GHYD0NS5C2"
  };
  firebase.initializeApp(config);

  export  const auth =firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  export default firebase;