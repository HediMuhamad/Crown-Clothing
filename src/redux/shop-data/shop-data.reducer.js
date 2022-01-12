import { shopDataActionTypes } from "./shop-data.enums"

const INTITIAL_STATE = {
    collections: null,
    isInFetchingData: true,
    errorMessage: null
}

const shopdataReducer = (state = INTITIAL_STATE, action) => {    
    switch(action.type){
        case shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_START:
            return {
                ...state,
                isInFetchingData: true
            }
        case shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isInFetchingData: false,
            }
        case shopDataActionTypes.FETCH_DATA_FROM_FIRESTORE_FAILURE:
            return {
                ...state,
                isInFetchingData: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}

export default shopdataReducer;