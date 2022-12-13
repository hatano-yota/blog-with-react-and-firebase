import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp7j3zU4-3oFt7YHX-SAZI5_N8hm2RnF0",
  authDomain: "blog-with-react-and-fire-e65b5.firebaseapp.com",
  projectId: "blog-with-react-and-fire-e65b5",
  storageBucket: "blog-with-react-and-fire-e65b5.appspot.com",
  messagingSenderId: "1007250124233",
  appId: "1:1007250124233:web:5185d993fe3946f0754c18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
