/**
 * FAHAD BIN HUSNE ALI — FIREBASE CONFIGURATION & INITIALIZATION
 * Project: fahad-bin-husne-ali
 */

const firebaseConfig = {
  apiKey: "AIzaSyCnKPfGtExPP0J237AXR_pirXYhZT-VafY",
  authDomain: "fahad-bin-husne-ali.firebaseapp.com",
  projectId: "fahad-bin-husne-ali",
  storageBucket: "fahad-bin-husne-ali.firebasestorage.app",
  messagingSenderId: "1021502377994",
  appId: "1:1021502377994:web:34c87e25ea537b402d4ff3",
  measurementId: "G-GT64YK4G89"
};

// Initialize Firebase
let firebaseApp = null;
let db = null;
let storage = null;
let auth = null;
let analytics = null;

if (typeof firebase !== 'undefined') {
  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    
    if (firebase.firestore) {
      db = firebase.firestore();
    }
    if (firebase.storage) {
      storage = firebase.storage();
    }
    if (firebase.auth) {
      auth = firebase.auth();
    }
    if (firebase.analytics && typeof firebase.analytics === 'function') {
      analytics = firebase.analytics();
    }
    console.log("🔥 Firebase initialized successfully for fahad-bin-husne-ali");
  } catch (error) {
    console.warn("Firebase initialization notice:", error);
  }
}
