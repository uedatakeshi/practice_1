import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YBMJsXzOYsOSTruwDJMd1c1RO2Rn3ps",
  authDomain: "vue-diary-76c4a.firebaseapp.com",
  projectId: "vue-diary-76c4a",
  storageBucket: "vue-diary-76c4a.appspot.com",
  messagingSenderId: "173145505020",
  appId: "1:173145505020:web:47b6d4a0586e4e6ef1ab79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;