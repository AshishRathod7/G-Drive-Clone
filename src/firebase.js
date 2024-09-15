import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDukLFnYZEqvHr3BftrosTi4GbpUp9xD88",
  authDomain: "g-drive-a5846.firebaseapp.com",
  projectId: "g-drive-a5846",
  storageBucket: "g-drive-a5846.appspot.com",
  messagingSenderId: "960381759581",
  appId: "1:960381759581:web:92632640543d1301e09db4"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app