import rootReducer from "../reducers/combineReducer";
import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

import {applyMiddleware} from 'redux'
import thunk from "redux-thunk"; 


const Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default Store;