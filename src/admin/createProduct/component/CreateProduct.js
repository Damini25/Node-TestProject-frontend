import React from 'react';
import './CreateProduct.scss';
import PropTypes from 'prop-types';

const CreateProductComponent = ({ addToCart, handleOnChange,title,desc,price}) => {

    return (
        <div className="create-product-main">
            <h3>Create Product</h3>
            <div className="create-product-main__div">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={handleOnChange} name="title"/>
            </div>
            <div className="create-product-main__div">
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" value={desc} onChange={handleOnChange} name="desc"/>
            </div>
            <div className="create-product-main__div">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" value={price} onChange={handleOnChange} name="price"/>
            </div>
            <div className="create-product-main__div">
                <label htmlFor="prodImage">Image</label>
                <input type="file" id="prodImage" name="productImage"/>
            </div>
            <button onClick={addToCart}>Create Product</button>
        </div>
    );
}

export default CreateProductComponent;
CreateProductComponent.propTypes = {
    title:PropTypes.any,
    desc:PropTypes.any,
    price:PropTypes.any,
    addToCart: PropTypes.func,
    handleOnChange: PropTypes.func
}