import app from './configuration';
import {getAuth,onAuthStateChanged, signOut,
        signInWithPopup, GoogleAuthProvider,
        signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { createUserProfileDocument } from './firestore';

const auth = getAuth(app);

const googleOAuthProvider = new GoogleAuthProvider();

//Global Handlers
export const authChangeHandlingForwarder = (handler) => onAuthStateChanged(auth, handler)
export const authOut = () => signOut(auth);

//Email and Password
export const authInWithEmailAndPassword = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    }catch(error){
        console.error(error);
    }
}

export const authUpWithEmailAndPassword = async (displayName ,email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await createUserProfileDocument(userCredential.user, {displayName})
        return userCredential;
    }catch(error){
        console.error(error);
    }
}

// Providers
export const authInWithGoogle = async () => {
    try{
        const userCredential = await signInWithPopup(auth, googleOAuthProvider);
        await createUserProfileDocument(userCredential.user)
        return userCredential;
    }catch(error){
        console.error(error);
    }
}




