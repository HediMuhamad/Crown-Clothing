import { getFirestore, onSnapshot,
         doc, getDoc, setDoc } from 'firebase/firestore'
const db = getFirestore(); //initialization

export const createUserProfileDocument = async (userCreadntial, additionalData) => {
    
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
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.error(error);
        }
    }

    return userRef;
}

export const onSnapshotHandler = (ref, handler) => onSnapshot(ref, handler);

