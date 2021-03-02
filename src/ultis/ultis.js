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

function signIn(accountInfo) {
    return new Promise((res, rej) => {
        db.collection("users")
            .where("username", "==", accountInfo.username)
            .limit(1)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    throw new Error("Sai tên đăng nhập.");
                } else {
                    // return querySnapshot.docs[0].data();
                    return querySnapshot.docs[0];
                }
            })
            // .then((userInfo) => {
            .then((doc) => {
                // if (userInfo.password !== accountInfo.password) {
                if (doc.data().password !== accountInfo.password) {
                    throw new Error("Sai mật khẩu.");
                } else {
                    // res(userInfo);
                    res(doc.id);
                }
            })
            .catch((error) => {
                rej(error.message);
            });
    });
}
export { signIn }

function signUp(accountInfo) {
    return new Promise((res, rej) => {
        db.collection("users")
            .where("username", "==", accountInfo.username)
            .limit(1)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    throw new Error("Tên đăng nhập đã tồn tại.");
                }
            })
            .then(() => {
                db.collection("users")
                    .add(accountInfo)
                    .then(doc => {
                        res(doc.id);
                    })
            })
            .catch((error) => {
                rej(error.message);
            });
    });
}
export { signUp }

