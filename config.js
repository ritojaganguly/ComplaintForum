import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyAA2Z5c-YX2gmfsdc1b5npEY9Tv7znbWrA",
  authDomain: "complaint-forum-afdfa.firebaseapp.com",
  projectId: "complaint-forum-afdfa",
  storageBucket: "complaint-forum-afdfa.appspot.com",
  messagingSenderId: "156087810081",
  appId: "1:156087810081:web:0b2917008fd2c6a1f10b60"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

