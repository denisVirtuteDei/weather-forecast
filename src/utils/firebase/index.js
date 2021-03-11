import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "weather-forecast-72443.firebaseapp.com",
    databaseURL: "https://weather-forecast-72443.firebaseio.com",
    projectId: "weather-forecast-72443",
    storageBucket: "weather-forecast-72443.appspot.com",
    messagingSenderId: "764447596972"
}

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
export default firebase

export const singInWithGoogleAccountUsingFirebase = () => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            const { user } = result
            return user
        })
        .catch(error => { throw error })
}

export const singInWithEmailUsingFirebase = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
            const { user } = result
            return user
        })
        .catch(error => { throw error })
}

export const checkUserAuth = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}

export const getAuthUserInfo = () => firebase.auth().currentUser

export const singOutUsingFirebase = () => firebase.auth().signOut()