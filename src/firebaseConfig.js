import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApv_QaUQ8MXUb5kxMdgSOO3kwI-NCdRaE",
  authDomain: "motor-reservas.firebaseapp.com",
  projectId: "motor-reservas",
  storageBucket: "motor-reservas.appspot.com",
  messagingSenderId: "136372789414",
  appId: "1:136372789414:web:406556e457a00135499467"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
