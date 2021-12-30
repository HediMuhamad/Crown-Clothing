import app from './configuration'
import { getFirestore, onSnapshot,
         doc, getDoc, setDoc } from 'firebase/firestore'
const db = getFirestore(); //initialization

export const readFromDatabase = async () => {
    // const usersRef = collection(db, 'users');
    // const usersSnapShot = await getDocs(usersRef);
    // usersSnapShot.forEach(doc => console.log(doc))

    // const userRef = doc(db, 'users/3YXYpzy2lEQnDr8cJeMv');
    // const userSnapShot = await getDoc(userRef);
    // console.log(userSnapShot.data());
}

export const createUserProfileDocument = async (userCreadntial) => {
    
    const userRef = doc(db, `users/${userCreadntial.uid}`);
    const userSnapShot = await getDoc(userRef);

    if(!userSnapShot.exists()){
        const { displayName, email, emailVerified, photoURL } = userCreadntial;
        const createdAt = new Date(); 
        try{
            await setDoc(userRef, {
                displayName,
                email,
                emailVerified,
                photoURL,
                createdAt
            })
        }catch(error){
            console.error(error);
        }
    }

    return userRef;

}

export const onSnapshotHandler = (ref, handler) => onSnapshot(ref, handler);

