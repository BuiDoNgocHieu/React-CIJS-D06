// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import { firebaseConfig } from "../config/config.firebase";
// try {
//     firebase.initializeApp(firebaseConfig)
// } catch {
//     console.log('firebase app was intalled')
// }
// const db = firebase.firestore()
// export function showInfo() {
//     console.log(firebaseConfig)
// }

// export async function signUp(userInformation) {
//     try {
//         const { username, password } = userInformation
//         const flag = await db.collection('users')
//             .where('username', '==', username)
//             .get()
//             .then(querySnapshot => {
//                 return querySnapshot.empty
//             })

//         if (!flag) {
//             throw new Error('Username was existed!')
//         }
//         const newUserId = await db.collection('users')
//             .add({
//                 username: username,
//                 password: password
//             }).then(data => {
//                 return data.id
//             })
//         return newUserId
//     } catch (err) {
//         throw err
//     }
// }


// export async function SignInUltis(user) {
//     // console.log(user)
//     const { username, password } = user
//     return await db.collection('users').where('username', '==', username).limit(1).get()
//         .then(querySnapshot => {
//             const data = []
//             querySnapshot.forEach(
//                 (doc) => {
//                     return data.push({
//                         userId: doc.id,
//                         ...doc.data()
//                     })
//                 }
//             )
//             if (data[0]['password'] == password) {
//                 return data[0]['userId']
//             } else {
//                 throw new Error('Login Fail')

//             }
//         })

// }