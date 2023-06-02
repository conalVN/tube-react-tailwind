import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjLMLrGZY6vr1P8qk21FlghdZWXWHPTQs",
  authDomain: "tube-clone-29cc6.firebaseapp.com",
  projectId: "tube-clone-29cc6",
  storageBucket: "tube-clone-29cc6.appspot.com",
  messagingSenderId: "59479740443",
  appId: "1:59479740443:web:5d97d713a2d849855ae8be",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope(`https://www.googleapis.com/auth/youtube.force-ssl`);

export { auth, provider };
