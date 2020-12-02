import firebase from "firebase";

const firebaseConfig = {
    //keys
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;
