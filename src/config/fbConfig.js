import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDsr8mJRVepcbB2uRRB1OK9p2EYljEqGwU",
    authDomain: "evernote-clone-d0de3.firebaseapp.com",
    projectId: "evernote-clone-d0de3",
    storageBucket: "evernote-clone-d0de3.appspot.com",
    messagingSenderId: "920660742946",
    appId: "1:920660742946:web:067c1f44ffb86c5d908b7b"
};

firebase.initializeApp(firebaseConfig)
export default firebase