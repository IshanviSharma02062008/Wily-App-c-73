import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBaZeh6aMuUD2Gb4ciTAcpkm8obFTeF1Bc",
  authDomain: "wily-bba8e.firebaseapp.com",
  projectId: "wily-bba8e",
  storageBucket: "wily-bba8e.appspot.com",
  messagingSenderId: "11408049652",
  appId: "1:11408049652:web:f340bd941b0c88dbf925a1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
