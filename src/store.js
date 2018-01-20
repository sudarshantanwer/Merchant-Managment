/**
 * Created by sudarshan on 17/1/18.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk];
let environment = (process.env.NODE_ENV || 'development').toString().trim().toLowerCase();

let initialState = {};
// typeof window !== "undefined" && (initialState = window.__REDUX_STATE__);
const store = createStore(combineReducers(reducers),initialState,(compose(applyMiddleware(...middleware))),
);

store.subscribe(()=> {
    // console.log('Store updated: ', store.getState());
});
export default store;
