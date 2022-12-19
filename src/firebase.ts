import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDfN6GfM5EEjjMdjrFnEF2VafU6HAf5ahU",
  authDomain: "web-write.firebaseapp.com",
  projectId: "web-write",
  storageBucket: "web-write.appspot.com",
  messagingSenderId: "813196725379",
  appId: "1:813196725379:web:c9baaa3ed1c8c147c7dfb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

if (import.meta.env.DEV) {
  connectFirestoreEmulator(firestore, "localhost", 8080);
}

export { firestore };

