import { takeLatest, call, put, all } from "redux-saga/effects"
import { UserActionTypes } from "./user.enums"
import { onSignInSuccess, onAuthFailed, onSignOutSuccess } from "./user.action"
import { clearTheCart } from "../cart/cart.action"
import { whenAuthChanged, authInWithGoogle, authInWithEmailAndPassword, authUpWithEmailAndPassword, authOut } from "../../firebase/authentication"
import { getDocumentRef, getDocumentData, createUserProfileDocument } from "../../firebase/firestore"

/*Use in saga run method from root-reducer */
export function* onSignUpWithEmailStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onSignInWithGoogleStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignInWithEmailAndPasswordStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* getCurrentUserStart(){
    yield takeLatest(UserActionTypes.GET_CURRENT_USER_FROM_STARTUP_START, getCurrentUserFromStartup)
}


export function* signInSuccess({user}){
    const uid = user.uid;
    const userRef = getDocumentRef(`users/${uid}`)
    const userSnapshot = yield getDocumentData(userRef)
    const userData = userSnapshot.data();
    yield put(onSignInSuccess({uid, ...userData}))
}

export function* authFailed(error){
    yield put(onAuthFailed(error.message))
}


export function* signUpWithEmail({payload: {displayName, email, password}}){
    try{
        const userCredential = yield call(authUpWithEmailAndPassword, email, password);
        yield call(createUserProfileDocument, userCredential.user, {displayName});
        yield call(signInSuccess, userCredential)
    }catch(error){
        console.error("ERROR #1GeN3w");
        yield call(authFailed, error)
    }
}


export function* signInWithGoogle(){
    try{
        const userCredential = yield call(authInWithGoogle);
        yield call(signInSuccess, userCredential);
    }catch(error){
        console.error("ERROR #1GeN3k");
        yield call(authFailed, error)
    }
}

export function* signInWithEmailAndPassword({payload: {email, password}}){
    try{
        const userCredential = yield call(authInWithEmailAndPassword, email, password);
        yield call(signInSuccess, userCredential);
    }catch(error){
        console.error("ERROR #1GeN3l");
        yield call(authFailed, error)
    }
}

export function* getCurrentUserFromStartup(){
    try{
        const userCredential = yield whenAuthChanged();
        if(userCredential){
            yield call(signInSuccess, {user: userCredential})
        }
    }catch(error){
        console.error("ERROR #4GsTb3");
        yield call(authFailed, error)        
    }
}

export function* signOut(){
    try{
        yield call(authOut);
        yield put(onSignOutSuccess());
        yield put(clearTheCart())
    }catch(error){
        console.error("ERROR #Gwfew2");
        yield call(authFailed, error)        
    }
}

/*COLLECTOR */
export default function* userSagas(){
    yield all([
        call(getCurrentUserStart),
        call(onSignUpWithEmailStart),
        call(onSignInWithGoogleStart),
        call(onSignInWithEmailAndPasswordStart),
        call(onSignOutStart),
    ])
}