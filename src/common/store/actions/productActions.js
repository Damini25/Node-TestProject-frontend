import * as ActionTypes from './actionTypes';

export const getProductList =(data)=>{
    return {
        type:ActionTypes.GET_PRODUCTS_LIST,
        data:data
    }
}

export const addNewProduct =(data)=>{
    return {
        type:ActionTypes.ADD_NEW_PRODUCT,
        payload:data
    }
}

export const getProductDataById=(id)=>{
    return{
        type:ActionTypes.GET_PRODUCT_BY_ID,
        id:id
    }
}

export const editProductData=(data)=>{
    return{
        type:ActionTypes.EDIT_PRODUCT_DATA,
        data:data
    }
}

export const deleteProduct=(id)=>{
    console.log('actions',id)
    return{
        type:ActionTypes.DELETE_PRODUCT,
        id:id
    }
}
