import React from "react";

import './cart-item.styles.scss'

export const CartItem = ({name, price, quantity, imageUrl}) => (
    <div className="cart-item" >
        <div className="img" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    </div>
)