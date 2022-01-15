import { takeLatest, put, call } from "redux-saga/effects"
import { shopDataActionTypes } from "./shop-data.enums"
import { fetchDataFromFirestoreSuccess, fetchDataFromFirestoreFailure } from "./shop-data.actions"
import { parseToShopData } from "./shop-data.utils"
import { getCollectionData, getCollectionRef } from "../../firebase/firestore"

export function* onFetchDataFromFirestore(){
    yield takeLatest(shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_START, fetchDataFromFirestore)
}

export function* fetchDataFromFirestore(){
    try{
        const feedback = yield getCollectionData(getCollectionRef('shopData'));
        const docsArray = feedback.docs.map(doc=>doc.data());
        const parsedShopData = yield call(parseToShopData, docsArray)
        yield put(fetchDataFromFirestoreSuccess(parsedShopData));
    }catch(error){
        yield put(fetchDataFromFirestoreFailure(error.message));
        console.error("ERROR #ccEW3G =>", error);
    }
}

