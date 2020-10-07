import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDDi4uwlPXlbPqBXPxfINMajlZVQm0nQPs",
    authDomain: "facebook-clone-b8d9d.firebaseapp.com",
    databaseURL: "https://facebook-clone-b8d9d.firebaseio.com",
    projectId: "facebook-clone-b8d9d",
    storageBucket: "facebook-clone-b8d9d.appspot.com",
    messagingSenderId: "201927162557",
    appId: "1:201927162557:web:a14781b005c165fa2415d4",
    measurementId: "G-XXH1HE6QMG"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;