import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../common/store/actions/actionIndex';
import EditProductComponent from '../component/EditProduct';
import { useParams } from 'react-router-dom';

const EditProduct = () => {

    const { id } = useParams();
    const productState = useSelector(state => state.productReducer.productDataToEdit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getProductDataById(id));
        console.log('in edit state', productState);
    }, []);

    const handleOnChange = (e) => {
        dispatch(Actions.editProductData({
            name:e.target.name,
            value:e.target.value
        }))
    }

    const onAddingToCart = () => {
      dispatch(Actions.addNewProduct(productState));
    }

    return <EditProductComponent addToCart={onAddingToCart} title={productState.title} price={productState.price}
        desc={productState.desc} handleOnChange={handleOnChange}></EditProductComponent>
}

export default EditProduct;