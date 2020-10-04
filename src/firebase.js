import firebase from 'firebase';

const firebaseConfig = {
  apiKey: <Your Value>,
  authDomain: <Your Value>,
  databaseURL: <Your Value>,
  projectId: <Your Value>,
  storageBucket: <Your Value>,
  messagingSenderId: <Your Value>,
  appId: <Your Value>,
  measurementId: <Your Value>,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
