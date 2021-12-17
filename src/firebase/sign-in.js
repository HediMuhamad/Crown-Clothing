import app from './init-firebase';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const auth = getAuth(app);

const googleOAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try{
        var result = await signInWithPopup(auth, googleOAuthProvider);
    }catch(error){
        console.error(error);
    }
    return result;
}