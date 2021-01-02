import React from 'react';
import PropTypes from 'prop-types';
import './ListProduct.scss';

const ListProductsComponent = ({ productsList, onEdit, onDelete }) => {
    //console.log('products',productsList);
    return (
        <div className="list-product-main">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element['title']}</td>
                                <td>{element['desc']}</td>
                                <td>{element['price']}</td>
                                <td><button onClick={(e) => onEdit(e, element)}>Edit</button>
                                    <button onClick={(e) => onDelete(e, element)}>Delete</button></td>
                            </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListProductsComponent;
ListProductsComponent.propTypes = {
    productsList: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
}
