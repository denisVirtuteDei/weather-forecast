import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxFOiLf9hoQnvLdLvsVRH1JJtVbGatMZY",
    authDomain: "weather-forecast-72443.firebaseio.com",
    databaseURL: "https://weather-forecast-72443.firebaseio.com",
    projectId: "weather-forecast-72443",
    storageBucket: "weather-forecast-72443.appspot.com",
    messagingSenderId: "764447596972"
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export const singInWithGoogleAccountUsingFirebase = () => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            const { user } = result
            return user
        })
}

export const signInAnonymouslyUsingFirebase = () => {
    return firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            const { user } = result
            return user
        })
}

export const checkUserAuth = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}

export const singOutUsingFirebase = () => {
    return firebase.auth().signOut()
}