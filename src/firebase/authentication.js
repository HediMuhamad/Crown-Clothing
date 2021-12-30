import app from './configuration';
import {getAuth,onAuthStateChanged,
        signInWithPopup, GoogleAuthProvider,
        signOut} from 'firebase/auth'

const auth = getAuth(app);

const googleOAuthProvider = new GoogleAuthProvider();

export const authInWithGoogle = async () => {
    try{
        var result = await signInWithPopup(auth, googleOAuthProvider);
    }catch(error){
        console.error(error);
    }
    return result;
}

export const authChangeHandlingForwarder = (handler) => onAuthStateChanged(auth,async user=>handler(user))

export const authOut = () => signOut(auth);


