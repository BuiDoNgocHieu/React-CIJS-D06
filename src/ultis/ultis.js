
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../config/config.firebase'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('Firebase app was intalled!')
}
const db = firebase.firestore()


//Cách 1.(Tạo)
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

//Thêm
export async function addTodo(todoInfomation) {
    try {
        const { ownerId, title, content } = todoInfomation
        const todoId = await db.collection('todos').add({
            ownerId: ownerId,
            title: title,
            content: content
        }).then(data => {
            return data.id
        })
        console.log(todoId)
    } catch (err) {
        throw err
    }
}

//Sửa
export async function editTodo(todoInfomation) {
    try {
        const { title, content, todoId } = todoInfomation
        await db.collection('todos').doc(todoId).set({
            title: title,
            content: content
        }, {
            merge: true
        })
        return 'Update successful!'
    } catch (err) {
        throw err
    }
}

//Đọc
export async function getTodo(userId) {
    return await db.collection('todos').where('ownerId', '==', userId).get()
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

export async function getTodo(userId) {
    db.collection('todos').where('userId', '==', userId)
        .get()
        .then(data => {

        })
}
let todo = [
    {
        title: "buoisang",
        daycreat: "12/12",
        content: "di hoc",
        id: "CR0BdsxIBYAWx1jkuFO",
        userId,
        isComplete: false,
    }
]

//Cách 2. (Tạo)
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
