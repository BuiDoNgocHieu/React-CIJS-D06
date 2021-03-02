import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from "../config/config.firebase";
try {
    firebase.initializeApp(firebaseConfig)
} catch {
    console.log('firebase app was intalled')
}
const db = firebase.firestore()
export function showInfo() {
    console.log(firebaseConfig)
}