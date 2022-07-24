import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjhvKG5RxbqO7PL5aBgi1BNG-1tQ7hm4Q",
    authDomain: "clone-4129e.firebaseapp.com",
    projectId: "clone-4129e",
    storageBucket: "clone-4129e.appspot.com",
    messagingSenderId: "931489840833",
    appId: "1:931489840833:web:f56c51aa1567b1ca741e40"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider }