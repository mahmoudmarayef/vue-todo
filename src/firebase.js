import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvZo-q8qln7cBU0Pvvf9RA5IRwGSwZU44",
    authDomain: "todo-vue-97c3c.firebaseapp.com",
    databaseURL: "https://todo-vue-97c3c.firebaseio.com",
    projectId: "todo-vue-97c3c",
    storageBucket: "todo-vue-97c3c.appspot.com",
    messagingSenderId: "213601586786",
    appId: "1:213601586786:web:8aec677dbfca04bbb34b3b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()

export default firestore