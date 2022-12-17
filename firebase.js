import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxmncmYD7GCNXuMY7nEu_b1GNFMYpCnx4",
  authDomain: "signal-clone-3295f.firebaseapp.com",
  projectId: "signal-clone-3295f",
  storageBucket: "signal-clone-3295f.appspot.com",
  messagingSenderId: "591016292945",
  appId: "1:591016292945:web:84606894626faee25bbe70"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db }