// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgzCq2_48RTKn3WysNCqDM-ElLEt6ulg",
  authDomain: "miniblog-395fe.firebaseapp.com",
  projectId: "miniblog-395fe",
  storageBucket: "miniblog-395fe.appspot.com",
  messagingSenderId: "724380405652",
  appId: "1:724380405652:web:622e0d0f7ca8d79407c981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };