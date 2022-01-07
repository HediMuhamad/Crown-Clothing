import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist"

import theReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
}

const store = createStore(theReducer, applyMiddleware(...middlewares));

const persistedStore = persistStore(store);

export { store, persistedStore }