import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

// 🔹 Firebase config (вставь своё)
const firebaseConfig = {
    apiKey: "AIzaSyA7RTrSP-wbuXPjEvq0C1_CdUlRVB9nF5Q",
    authDomain: "portfolio-website-ab2dd.firebaseapp.com",
    projectId: "portfolio-website-ab2dd",
    storageBucket: "portfolio-website-ab2dd.firebasestorage.app",
    messagingSenderId: "566369378787",
    appId: "1:566369378787:web:7194a8c6ff02d0b23440d6",
    measurementId: "G-GX4CMN7MLW"
  };

// 🔹 Инициализация
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Проверяем, поддерживается ли Analytics перед инициализацией
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics, collection, getDocs, getDoc, doc  };
