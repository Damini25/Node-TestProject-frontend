import productReducer from './productReducer';
import loginReducer from './loginReducer';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {history} from '../../utilities/history';

export const rootReducer=combineReducers({
    productReducer:productReducer,
    loginReducer:loginReducer,
    router: connectRouter(history)
});