/**
 * FAHAD BIN HUSNE ALI — FIREBASE CONFIGURATION & INITIALIZATION
 * Project: fahad-bin-husne-ali
 */

// Global variables for window & script access
var firebaseConfig = {
  apiKey: "AIzaSyCnKPfGtExPP0J237AXR_pirXYhZT-VafY",
  authDomain: "fahad-bin-husne-ali.firebaseapp.com",
  projectId: "fahad-bin-husne-ali",
  storageBucket: "fahad-bin-husne-ali.firebasestorage.app",
  messagingSenderId: "1021502377994",
  appId: "1:1021502377994:web:34c87e25ea537b402d4ff3",
  measurementId: "G-GT64YK4G89"
};

var firebaseApp = null;
var db = null;
var storage = null;
var auth = null;
var analytics = null;

if (typeof window !== 'undefined') {
  window.firebaseConfig = firebaseConfig;
}

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
      try {
        analytics = firebase.analytics();
      } catch (ae) {
        console.warn('Firebase Analytics notice:', ae);
      }
    }
    
    if (typeof window !== 'undefined') {
      window.firebaseApp = firebaseApp;
      window.db = db;
      window.storage = storage;
      window.auth = auth;
      window.analytics = analytics;
    }
    console.log("🔥 Firebase initialized successfully for fahad-bin-husne-ali");
  } catch (error) {
    console.warn("Firebase initialization notice:", error);
  }
}

