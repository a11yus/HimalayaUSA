import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDoGmsrKUORn77LPNKsp3Y5RPE2URrrjfo",
    authDomain: "proud-tin-7411.firebaseapp.com",
    projectId: "proud-tin-7411",
    storageBucket: "proud-tin-7411.appspot.com",
    messagingSenderId: "471975303031",
    appId: "1:471975303031:web:9dbaae35a41678ce8ef372"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {auth}