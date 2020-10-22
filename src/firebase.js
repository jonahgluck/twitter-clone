import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgG1gU5y3IJPG4DsuVjkpExVBTe2c8Agc",
    authDomain: "twitter-clone-cadae.firebaseapp.com",
    databaseURL: "https://twitter-clone-cadae.firebaseio.com",
    projectId: "twitter-clone-cadae",
    storageBucket: "twitter-clone-cadae.appspot.com",
    messagingSenderId: "676974316497",
    appId: "1:676974316497:web:9bec91b6036db41cacaef0",
    measurementId: "G-CYFHDX1Q3W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;