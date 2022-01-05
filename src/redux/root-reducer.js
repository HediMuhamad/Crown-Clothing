import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

/*Reducers */
import userReducer from './user/user.reducer.js'
import cartReducer from "./cart/cart.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopdataReducer from "./shop-data/shop-data.reducer.js";

const persistConfig = {
    key: "root", //Tell where it should start from reducers
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopData: shopdataReducer,
})

export default persistReducer(persistConfig, rootReducer);


