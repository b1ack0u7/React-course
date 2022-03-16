import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqrgUr7lrZZS5M5h8EhWJk-RazgBsHSeQ",
  authDomain: "syliar-react.firebaseapp.com",
  projectId: "syliar-react",
  storageBucket: "syliar-react.appspot.com",
  messagingSenderId: "849078849062",
  appId: "1:849078849062:web:9476d3ff97c0fc37b0a0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);