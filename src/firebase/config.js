import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBlbEXZ9R0uPMZbg_Lip6kq8rWVlEndjiU",
  authDomain: "placeonix.firebaseapp.com",
  projectId: "placeonix",
  storageBucket: "placeonix.firebasestorage.app",
  messagingSenderId: "923570345439",
  appId: "1:923570345439:web:5b6a89efc297c7f945206a",
  measurementId: "G-W83XNJN2MF"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
export const storage = getStorage(app)
