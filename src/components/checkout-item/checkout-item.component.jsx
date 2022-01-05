import React from "react";
import { findInStore } from "../../assets/shop.data";

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const { imageUrl, name, price } = findInStore(cartItem.id);
    const quantity = cartItem.quantity;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="img"style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem