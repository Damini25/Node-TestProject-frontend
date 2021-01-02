import React, { useEffect } from 'react';
import ListProductsComponent from '../component/ListProduct';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../common/store/actions/actionIndex';
import { useHistory } from 'react-router-dom';

const ListProductsContainer = () => {
    const history = useHistory();
    const productState = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.getProductList());
    }, []);

    const onEdit = (e, elem) => {
        console.log('onedit', elem);
      //  dispatch(Actions.getProductDataById(elem['id']));
        history.push('/admin/editProduct/'+elem['_id']);

    }
    const onDelete = (e,elem) => {
        dispatch(Actions.deleteProduct(elem['_id']));
    }

    return (
        <ListProductsComponent
            productsList={productState.productReducer['productList']}
            onEdit={onEdit}
            onDelete={onDelete}
        ></ListProductsComponent>)
}
export default ListProductsContainer;
