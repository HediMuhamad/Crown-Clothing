import { all, call } from "redux-saga/effects";

import { onFetchDataFromFirestore } from "./shop-data/shop-data.sagas"

export default function* shopDataSaga(){
    yield all([
        call(onFetchDataFromFirestore),
    ])
}