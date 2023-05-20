import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtHFzLnfEkc8ylNES1kwPHmPEbaIIay_8",
  authDomain: "mental-health-app-74436.firebaseapp.com",
  projectId: "mental-health-app-74436",
  storageBucket: "mental-health-app-74436.appspot.com",
  messagingSenderId: "85912319732",
  appId: "1:85912319732:web:6b2e9616b4bee50ccd90a1",
};

const app = initializeApp(firebaseConfig);

export { app };
