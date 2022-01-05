import React from "react";
import { connect } from "react-redux";
import { findInStore } from "../../redux/shop-data/shop-data.utils";
import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../redux/cart/cart.action";

import './checkout-item.styles.scss'

const CheckoutItem = ({quantity, id, clearItemFromCart, addItemToCart, removeItemFromCart}) => {
    const { imageUrl, name, price } = findInStore(id);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="img"style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItemFromCart(id) }>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItemToCart(id) }>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>{clearItemFromCart(id)}}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: id => dispatch(clearItemFromCart(id)),
    addItemToCart: id => dispatch(addItemToCart(id)),
    removeItemFromCart: id => dispatch(removeItemFromCart(id))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)