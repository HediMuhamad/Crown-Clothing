import app from './configuration';
import {getAuth,onAuthStateChanged, signOut,
        signInWithPopup, GoogleAuthProvider,
        signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(app);

const googleOAuthProvider = new GoogleAuthProvider();

//Global Handlers
export const whenAuthChanged = () => {
    return new Promise((resolve, reject)=>{
        const unSubscribeFromAuth = onAuthStateChanged(auth, userAuth => {
            unSubscribeFromAuth();
            resolve(userAuth);
        }, reject)
    })
}

export const authOut = () => signOut(auth);

//Email and Password
export const authInWithEmailAndPassword = ( email, password ) => ( signInWithEmailAndPassword(auth, email, password) )

// await createUserProfileDocument(userCredential.user, {displayName})
export const authUpWithEmailAndPassword = ( email, password ) => ( createUserWithEmailAndPassword(auth, email, password) )

// Providers
export const authInWithGoogle = () => ( signInWithPopup(auth, googleOAuthProvider) )




