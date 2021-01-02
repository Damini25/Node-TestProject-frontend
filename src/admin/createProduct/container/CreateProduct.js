import React, { useState } from 'react';
import CreateProductComponent from '../component/CreateProduct';
import { useSelector, useDispatch } from 'react-redux';
//import * as ActionTypes from '../../../common/store/actions/actionTypes';
import * as Actions from '../../../common/store/actions/actionIndex';

const CreateProduct = () => {
    const [formValues, setFormValues] = useState({
        title: '',
        desc: '',
        price:'',
        imageUrl:'',
    });
    const productState = useSelector(state => state);
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setFormValues(
            {
                ...formValues,
                [e.target.name]: e.target.value
            }
        );
    }

    const onAddingToCart = () => {
        dispatch(Actions.addNewProduct(formValues));
    }

    return <CreateProductComponent addToCart={onAddingToCart} title={formValues.title} price={formValues.price}
        desc={formValues.desc} handleOnChange={handleOnChange}></CreateProductComponent>
}

export default CreateProduct;