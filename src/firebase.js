import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDhSf9ISWuikYo0Nr2keUIvDqpCSuDXFaE",
  authDomain: "proud-tin-7411-62508.firebaseapp.com",
  projectId: "proud-tin-7411-62508",
  storageBucket: "proud-tin-7411-62508.appspot.com",
  messagingSenderId: "517861485962",
  appId: "1:517861485962:web:6a8c639931d9086c162c73"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {auth}