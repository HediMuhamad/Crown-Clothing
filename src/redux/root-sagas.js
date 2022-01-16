import { all, call } from "redux-saga/effects";

import shopDataSagas from "./shop-data/shop-data.sagas"
import userSagas from "./user/user.sagas";

export default function* shopDataSaga(){
    yield all([
        call(shopDataSagas),
        call(userSagas),
    ])
}