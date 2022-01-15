import { createStore, applyMiddleware } from "redux";

/*Middlewares */
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga"

import { persistStore } from "redux-persist"

import theReducer from "./root-reducer";
import rootSaga from "./root-sagas"

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
}

const store = createStore(theReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistedStore = persistStore(store);

export { store, persistedStore }