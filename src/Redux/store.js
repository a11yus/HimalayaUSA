import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import authReducer   from "./Authreducer/reducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk]
// this is also middleware
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const rootReducer = combineReducers({authReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(...middleware))