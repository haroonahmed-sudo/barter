import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCW00iDdNk9ATs8-5m_jrmphKG0pPhsz6g",
    authDomain: "barter-system-3c35c.firebaseapp.com",
    projectId: "barter-system-3c35c",
    storageBucket: "barter-system-3c35c.appspot.com",
    messagingSenderId: "671782137250",
    appId: "1:671782137250:web:a5a5244013ee0d5df016fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase