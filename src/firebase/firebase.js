// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC7Y6CmtLUmOE03pX3E63xKvKszv8-hdtc",
    authDomain: "challenge-3d4fc.firebaseapp.com",
    databaseURL: "https://challenge-3d4fc.firebaseio.com",
    projectId: "challenge-3d4fc",
    storageBucket: "challenge-3d4fc.appspot.com",
    messagingSenderId: "772216767260",
    appId: "1:772216767260:web:9b90490c0765e6278b30d9",
    measurementId: "G-KHRTP5744F"
  };

  //initialise App with firebaseConfig
  const firebaseApp=firebase.initializeApp(firebaseConfig);


  //initialize database
  const db=firebaseApp.firestore();

  //initialize auth
  const auth =firebase.auth();


  export{db,auth};