import { takeLatest, call, all, put } from 'redux-saga/effects';
import * as ActionTypes from '../actions/actionTypes';
import { push } from 'connected-react-router';
import { getProductsList, addProduct, getProductDataById,deleteProductData } from '../../services/products.service';

export function* callGetProductAPI() {
    const { response } = yield call(getProductsList);
    console.log('in saga get products list', response['data']);
    if (response && response['data']) {
        yield put({ type: ActionTypes.LOAD_PRODUCTS_LIST, data: response['data'] });
    }
}

export function* getProducts() {
    yield takeLatest(ActionTypes.GET_PRODUCTS_LIST, callGetProductAPI)
}

export function* callToAddProductAPI(action) {
    const { payload } = action;
    console.log('insaga', payload);
    const { response } = yield call(addProduct, payload);
    console.log('in saga add product', response);
}

export function* addNewProduct() {
    yield takeLatest(ActionTypes.ADD_NEW_PRODUCT, callToAddProductAPI)
}

export function* callToGetProductData(action) {
    const { id } = action;
    //console.log('insaga', id);
    const { response } = yield call(getProductDataById, id);
    console.log('in saga get edit product', response);
    if (response && response['data']) {
        yield put({ type: ActionTypes.GET_PRODUCT_DATA, data: response['data'] });
       // yield put(push('/admin/editProduct' + id));
    }
}

export function* getProductById() {
    yield takeLatest(ActionTypes.GET_PRODUCT_BY_ID, callToGetProductData)
}

export function* callToDeleteProductData(action) {
    const { id } = action;
    console.log('insaga delete product', id);
    const { response } = yield call(deleteProductData, id);
    console.log('in saga get delete product', response);
    // if (response && response['data']) {
    //     yield put({ type: ActionTypes.GET_PRODUCT_DATA, data: response['data'] });
    //    // yield put(push('/admin/editProduct' + id));
    // }
}

export function* deleteProduct() {
    yield takeLatest(ActionTypes.DELETE_PRODUCT, callToDeleteProductData)
}

export default function* productSaga() {
    yield all([getProducts(), addNewProduct(), getProductById(),deleteProduct()]);
}