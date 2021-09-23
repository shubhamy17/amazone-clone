import React from 'react';
import './Product.css';
function Product() {
    return (
        <div className="product">
            <div className="product__info"></div>
            <p>The lean Statup</p>
            <p className="product__price"></p>
            <small>$</small>
            <strong>19.99</strong>
        </div>
    );
}

export default Product;