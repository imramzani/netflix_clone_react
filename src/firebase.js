import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCoCdZnhE66uHA198StdgmAsrAqjYawOFo",
  authDomain: "netflix-clone-23-522da.firebaseapp.com",
  projectId: "netflix-clone-23-522da",
  storageBucket: "netflix-clone-23-522da.appspot.com",
  messagingSenderId: "668249965296",
  appId: "1:668249965296:web:f806b5d3ca3ef4ddb3f835"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {auth}
export default db