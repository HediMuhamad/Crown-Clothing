import React from "react";
import { useDispatch } from "react-redux";
import { findInStore } from "../../redux/shop-data/shop-data.utils";
import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../redux/cart/cart.action";

import './checkout-item.styles.scss'

const CheckoutItem = ({quantity, id}) => {
    const { imageUrl, name, price } = findInStore(id);
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="img"style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>dispatch(removeItemFromCart(id))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>dispatch(addItemToCart(id))}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={()=>dispatch(clearItemFromCart(id))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;