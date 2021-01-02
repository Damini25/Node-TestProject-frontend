import React from 'react';
import './Product.scss';
import PropTypes from 'prop-types';

const ProductComponent = ({product}) => {
    return (
        <div className="product-main">
                <h3>{product.title}</h3>
                <img src={product.img}></img>
                <p>{product.desc}</p>
                <button>Add To Cart</button>
        </div>
    )
}
export default ProductComponent;
ProductComponent.propTypes = {
    product: PropTypes.any
}