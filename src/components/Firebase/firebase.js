import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDXJ9J5jPLACco-1J-hcXw0xTaSuG4IwbI',
    authDomain: 'travelletter-6d294.firebaseapp.com',
    databaseURL: 'https://travelletter-6d294.firebaseio.com',
    projectId: 'travelletter-6d294',
    storageBucket: 'travelletter-6d294.appspot.com',
    messagingSenderId: '453213951451',
  };

class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
   
  export default Firebase;