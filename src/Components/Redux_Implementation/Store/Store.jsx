import {applyMiddleware, legacy_createStore as createStore} from 'redux' 
import {combineReducers} from 'redux'
import {logger} from 'redux-logger'
import AuthReducer from '../Reducers/AuthReducer';
let Combined_Reducer=combineReducers({
    AuthReducer: AuthReducer,

    
});

let FlipkartStore = createStore(Combined_Reducer,applyMiddleware(logger));

export default FlipkartStore;