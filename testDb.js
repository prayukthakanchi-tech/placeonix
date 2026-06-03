const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBlbEXZ9R0uPMZbg_Lip6kq8rWVlEndjiU",
  authDomain: "placeonix.firebaseapp.com",
  projectId: "placeonix",
  storageBucket: "placeonix.firebasestorage.app",
  messagingSenderId: "923570345439",
  appId: "1:923570345439:web:5b6a89efc297c7f945206a",
  measurementId: "G-W83XNJN2MF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  try {
    const q = collection(db, 'resources');
    const snap = await getDocs(q);
    console.log("Total resources in db:", snap.size);
    snap.forEach(doc => {
      console.log(`- [${doc.id}] ${doc.data().title} (${doc.data().department})`);
    });
  } catch (e) {
    console.error("Error connecting to db:", e);
  }
}

test();
