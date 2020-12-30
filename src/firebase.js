import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGO6v5M_uKjCF9ufjQ5Sa65wKNWZu-05U",
    authDomain: "clone-bb373.firebaseapp.com",
    projectId: "clone-bb373",
    storageBucket: "clone-bb373.appspot.com",
    messagingSenderId: "954017907831",
    appId: "1:954017907831:web:34fe64f5516745c6137272"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };