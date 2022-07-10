import app from './configuration'
import generateUniqueID from 'uniqid';
import { getFirestore, onSnapshot, writeBatch,
         doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore'

const db = getFirestore(app);
    
export const onSnapshotHandler = (ref, handler) => onSnapshot(ref, handler);
export const getCollectionRef = path => collection(db, path);
export const getDocumentRef = path => doc(db, path);
export const getCollectionData = query => getDocs(query);
export const getDocumentData = query => getDoc(query);

export const createUserProfileDocument = async (userCredential, additionalData) => {

    const userRef = doc(db, `users/${userCredential.uid}`);
    const userSnapShot = await getDoc(userRef);

    if(!userSnapShot.exists()){
        const { displayName, email, emailVerified, photoURL } = userCredential;
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
            console.error("ERROR #eF23d8 =>", error);
        }
    }

    return userRef;
}

export const uploadCollectionDocs = async (collectionPath, collectionsObject) => { //Call it in shop-data component while mounting.
    const batch = writeBatch(db)

    Object.keys(collectionsObject).forEach(async key=>{

        //Parsing Process
        let parsedCollectionsCollection = {  //CollectionsCollection = a collection (group of items) from Collections object
            title: collectionsObject[key].title,
            items: {} 
        }
        
        collectionsObject[key].items.forEach(each => {
            parsedCollectionsCollection.items[generateUniqueID()] = each
        })
        
        const { title, items } = parsedCollectionsCollection
        
        //Uploading process
        try{
            const newDocRef = doc(db,`${collectionPath}/${generateUniqueID()}`); //Writing inner object as an document.
            await setDoc(newDocRef, {title, items}) 
        }catch(error){console.error("ERROR #jS38Af  =>", error);}

    })
    
    try{ 
        batch.commit();
    }catch(error){
        console.error("ERROR #ds2TW3 =>", error);
    }
}


export const sendMessageToDB = async (name, email, phoneNumber, subject, message) => {
    const id = `${name}-${email}-${phoneNumber}-${subject}`;
    const msgRef = doc(db, `messages/${id}`);
    const msgSnapshot = await getDoc(msgRef);

    
    if(!msgSnapshot.exists()){
        try{
            await setDoc(msgRef, {
                name,
                email,
                phone:phoneNumber,
                subject,
                message
            })
        }catch(error){
            console.error("ERROR #eFaIb8 =>", error);
        }
    }

    return msgRef
    
}