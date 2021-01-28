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

export async function SignInUltis(user) {
    // console.log(user)
    const { username, password } = user
    return await db.collection('users').where('username', '==', username).limit(1).get()
        .then(querySnapshot => {
            const data = []
            querySnapshot.forEach(
                (doc) => {
                    return data.push({
                        userId: doc.id,
                        ...doc.data()
                    })
                }
            )
            if (data[0]['password'] == password) {
                return data[0]['userId']
            } else {
                throw new Error('Login Fail')

            }
        })

}