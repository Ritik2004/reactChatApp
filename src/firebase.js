import { getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWtEUGMCTvlU6-OuMS9FMHFOXMQXV6Xd0",
  authDomain: "chatapp-4a9ff.firebaseapp.com",
  projectId: "chatapp-4a9ff",
  storageBucket: "chatapp-4a9ff.appspot.com",
  messagingSenderId: "1023712131896",
  appId: "1:1023712131896:web:b4036f11c00a49b996dfcd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const storage = getStorage();

export const db = getFirestore()