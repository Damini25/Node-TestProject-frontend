import {all} from 'redux-saga/effects';
import productSaga from './productSaga';
import loginSaga from './loginSaga';

export default function* rootSaga(){
    yield all([loginSaga(),productSaga()]);
}