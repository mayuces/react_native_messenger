import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxmncmYD7GCNXuMY7nEu_b1GNFMYpCnx4",
  authDomain: "signal-clone-3295f.firebaseapp.com",
  projectId: "signal-clone-3295f",
  storageBucket: "signal-clone-3295f.appspot.com",
  messagingSenderId: "591016292945",
  appId: "1:591016292945:web:84606894626faee25bbe70"
};

initializeApp(firebaseConfig);

export const db = getFirestore();