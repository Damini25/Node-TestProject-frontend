import React from 'react';
import './EditProduct.scss';
import PropTypes from 'prop-types';

const EditProductComponent = ({ addToCart, handleOnChange,title,desc,price}) => {
console.log('ineditcom',title);
    return (
        <div className="edit-product-main">
            <h3>Edit Product</h3>
            <div className="edit-product-main__div">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={handleOnChange} name="title"/>
            </div>
            <div className="edit-product-main__div">
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" value={desc} onChange={handleOnChange} name="desc"/>
            </div>
            <div className="edit-product-main__div">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price} onChange={handleOnChange} name="price"/>
            </div>
            <div className="edit-product-main__div">
                <label htmlFor="prodImage">Image</label>
                <input type="file" id="prodImage" name="productImage"/>
            </div>
            <button onClick={addToCart}>Edit Product</button>
        </div>
    );
}

export default EditProductComponent;
EditProductComponent.propTypes = {
    title:PropTypes.any,
    desc:PropTypes.any,
    price:PropTypes.any,
    addToCart: PropTypes.func,
    handleOnChange: PropTypes.func
}