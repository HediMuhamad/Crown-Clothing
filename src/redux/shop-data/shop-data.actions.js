import { shopDataActionTypes } from "./shop-data.enums";
import { parseToShopData } from "./shop-data.utils"
import { getCollectionData, getCollectionRef } from '../../firebase/firestore'

export const fetchDataFromFirestoreStart = () => ({
    type: shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_START,
})

export const fetchDataFromFirestoreSuccess = (docsArray) => ({
    type: shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_SUCCESS,
    payload: docsArray
})

export const fetchDataFromFirestoreFailure = (errorMessage) => ({
    type: shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_FAILURE,
    payload: errorMessage
})

export const fetchDataFromFirestoreStartAsync = () => async dispatch => {
    try{
        dispatch(fetchDataFromFirestoreStart());
        const feedback = await getCollectionData(getCollectionRef('shopData'));
        const docsArray = feedback.docs.map(doc=>doc.data());
        const parsedShopData = parseToShopData(docsArray);
        dispatch(fetchDataFromFirestoreSuccess(parsedShopData));
    }catch(error){
        dispatch(fetchDataFromFirestoreFailure(error.message))
        console.error("ERROR #ccEW3G =>", error);
    }
}