import { shopDataActionTypes } from "./shop-data.enums"
import { parseToShopData } from "./shop-data.utils"

const INTITIAL_STATE = {
    collections: '',
}

const shopdataReducer = (state = INTITIAL_STATE, action) => {    
    switch(action.type){
        case shopDataActionTypes.PARSE_FIREBASE_DOCS_TO_SHOP_DATA:
            return {
                ...state,
                collections: parseToShopData(action.payload)
            }
        default:
            return state
    }
}

export default shopdataReducer;