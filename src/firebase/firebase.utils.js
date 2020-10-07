import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyAd6pZcd5DQzHFnLHPWmnHAwBrYQOIOBAU",
    authDomain: "crown-db-98bb2.firebaseapp.com",
    databaseURL: "https://crown-db-98bb2.firebaseio.com",
    projectId: "crown-db-98bb2",
    storageBucket: "crown-db-98bb2.appspot.com",
    messagingSenderId: "936171536662",
    appId: "1:936171536662:web:a0d901c659c64b32e4d037",
    measurementId: "G-9HY68328H7"
  }

  firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signinWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase