import firebase from 'firebase';

//initialize your database
 const firebaseConfig = {
  apiKey: "AIzaSyCrPFAZk1F96t7ZXeTxAYv48parHge6unk",
  authDomain: "project60-614be.firebaseapp.com",
  databaseURL: "https://project60-614be-default-rtdb.firebaseio.com",
  projectId: "project60-614be",
  storageBucket: "project60-614be.appspot.com",
  messagingSenderId: "411273501949",
  appId: "1:411273501949:web:fec2b617c9c870705df294"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 
 

  