import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmh0oZXo_C2IGcH7Qi7BbDr1K1SdCnrLc",
  authDomain: "marketplace-b5c34.firebaseapp.com",
  projectId: "marketplace-b5c34",
  storageBucket: "marketplace-b5c34.appspot.com",
  messagingSenderId: "151117059804",
  appId: "1:151117059804:web:f2ec107a54efa316e30619"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)