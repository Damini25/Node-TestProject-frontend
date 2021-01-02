import React from 'react';
import Product from '../../product/container/Product';
import PropTypes from 'prop-types';
import './ProductsListing.scss';

const ProductListingComponent=({productsList})=>{
    //console.log('products',productsList);
    return (
        <div className="product-listing-main">
            {productsList.map((element,index) => {
                  return <Product product={element} key={index}></Product>
            })}
        </div>
    )
}
export default ProductListingComponent;
ProductListingComponent.propTypes={
    productsList:PropTypes.array,
}
