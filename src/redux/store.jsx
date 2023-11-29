import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

// const store = createStore(rootReducers,applyMiddleware(thunk,logger))

const persistedReducer = persistReducer(persistConfig, rootReducers);

export let store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
);
export let persistor = persistStore(store);
