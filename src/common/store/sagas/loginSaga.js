import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import { push } from 'connected-react-router';
import {login,signup} from '../../services/login.service';

export function* callLoginAPI(action) {
    const {data} =action
    const { response } = yield call(login,data);
    console.log('in saga get on login', response['data']);
    if (response && response['data']) {
       // yield put({ type: ActionTypes.LOAD_PRODUCTS_LIST, data: response['data'] });
    }
}
export function* onLogin() {
    yield takeLatest(ActionTypes.ON_LOGIN_CLICK, callLoginAPI)
}

export function* callSignupAPI(action) {
    const {data} =action;
    const { response } = yield call(signup,data);
    console.log('in saga get on signup', response['data']);
    if (response && response['data']) {
       // yield put({ type: ActionTypes.LOAD_PRODUCTS_LIST, data: response['data'] });
    }
}
export function* onSignup() {
    yield takeLatest(ActionTypes.ON_SIGNUP, callSignupAPI)
}

export default function* loginSaga() {
    yield all([onLogin(),onSignup()]);
}