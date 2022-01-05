import SHOP_DATA from "./shop-data.data"

const INTITIAL_STATE = {
    collections: SHOP_DATA 
}

const shopdataReducer = (state = INTITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopdataReducer;