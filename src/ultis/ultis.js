// import firebase from 'firebase/app'
// import 'firebase/firestore'
import { firebaseConfig } from '../config/config.firebase'
try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('Firebase app was intalled!')
}
const db = firebase.firestore()

// export function signUp(userInformation) {
//     return new Promise((resolve, reject) => {
//         const { username, password } = userInformation
//         db.collection('users')
//         .where('username', '==', username)
//         .get()
//         .then(querySnapshot => {
//             if (!querySnapshot.empty) {
//                 throw new Error('Username was existed!')
//             } 
//         })
// .then(() => {
//     db.collection('users')
//         // .doc('daylanewid')
//         .add({
//             username: username,
//             password: password
//         }).then(data => {
//             console.log('Sign up successful!')
//             resolve(data.id)
//         })
// })
// .catch(err=>{
//     reject(err)
// })
//     })
// }

export async function signUp(userInformation) {
    try {
        const { username, password } = userInformation
        const flag = await db.collection('users')
            .where('username', '==', username)
            .get()
            .then(querySnapshot => {
                return querySnapshot.empty
            })

        if (!flag) {
            throw new Error('Username was existed!')
        }
        const newUserId = await db.collection('users')
            .add({
                username: username,
                password: password
            }).then(data => {
                return data.id
            })
        return newUserId
    } catch (err) {
        throw err
    }
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

export async function addTodo(userId, todo) {
    const {
        content,
        title
    } = todo

    console.log({
        content: content,
        title: title,
        userId: userId,
        isComplete: false,
        created: new Date().toDateString()
    })
    db.collection('todos').add({
        content: content,
        title: title,
        userId: userId,
        isComplete: false,
        created: new Date().toDateString()
    })
}

export async function getTodo(userId) {
    console.log(userId)
    return await db.collection('todos').where('userId', '==', userId)
        .get()
        .then(querySnapshot => {
            const todos = []
            querySnapshot.forEach(doc => {
                todos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            return todos
        })
}