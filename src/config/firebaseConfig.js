import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAUeuWAAbn03jqshH_FQIYc56gGO0h8x50",
    authDomain: "todo-app-react-coded.firebaseapp.com",
    databaseURL: "https://todo-app-react-coded.firebaseio.com",
    projectId: "todo-app-react-coded",
    storageBucket: "todo-app-react-coded.appspot.com",
    messagingSenderId: "928542252979",
    appId: "1:928542252979:web:a576b2d2270f47cc0935c6",
    measurementId: "G-046JG5LNWB"
  };
  // Initialize Firebase
 export default firebase.initializeApp(config);
