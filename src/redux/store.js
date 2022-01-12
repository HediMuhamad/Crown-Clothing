import { createStore, applyMiddleware } from "redux";

/*Middlewares */
import logger from "redux-logger";
import thunk from "redux-thunk"

import { persistStore } from "redux-persist"

import theReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
}

const store = createStore(theReducer, applyMiddleware(...middlewares));

const persistedStore = persistStore(store);

export { store, persistedStore }