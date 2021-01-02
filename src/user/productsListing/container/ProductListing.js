import React, { useEffect } from 'react';
import ProductListingComponent from '../component/ProductsListing';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../common/store/actions/actionIndex';

const ProductListingContainer=()=>{
    const productState = useSelector(state=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(Actions.getProductList());
    },[]);
   
    return <ProductListingComponent productsList={productState.productReducer['productList']}></ProductListingComponent>
}
export default ProductListingContainer;
