import { shopDataActionTypes } from "./shop-data.enums";
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
