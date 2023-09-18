import React from 'react';
import './Product.css';

function Product() {
    return (
            <div className="product">
                <div className="product_info">
                    <p>Title</p>
                    <p className="product_price"><small>$</small>  <strong>30</strong></p>
                    <div className="product_rating">* *</div>
                </div>
                <img src="https://cdn3.hipicon.com/images/bd/products/2023/05/18/uncommon-istanbul--summer-tote-anta-min--168439717489615.jpg&w=990&h=990" alt="product-image" />
                <button>add to basket</button>
            </div>
    );
}

export default Product;