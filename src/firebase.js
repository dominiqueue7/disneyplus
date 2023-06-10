import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoVaZtnRT3_hgspisyOVKeQiw67nH1gXo",
  authDomain: "disneyplus-clone-732f1.firebaseapp.com",
  projectId: "disneyplus-clone-732f1",
  storageBucket: "disneyplus-clone-732f1.appspot.com",
  messagingSenderId: "690136736844",
  appId: "1:690136736844:web:33ead555d502279f7700e9",
  measurementId: "G-4M9E5HE3HZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
