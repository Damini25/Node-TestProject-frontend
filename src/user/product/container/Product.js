import React from 'react';
import ProductComponent from '../component/Product';
import chocoImage from '../../../assets/images/chocolava.jpg';
import PropTypes from 'prop-types';

const ProductContainer=({product})=>{
    // const productDetail={
    //     title:'Choco Lava Cake',
    //     img:chocoImage,
    //     desc:'Tasty Choco lava cake baked with lots of love and flavoured with nutritious dry fruits'
    // }
    const productDetail={
        title:product.title,
        img:chocoImage,
        desc:product.desc
    }
    return <ProductComponent product={productDetail}></ProductComponent>
}
export default ProductContainer;
ProductContainer.propTypes={
    product:PropTypes.any,
}
