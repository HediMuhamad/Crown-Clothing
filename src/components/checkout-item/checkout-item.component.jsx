import React from "react";
import { connect } from "react-redux";
import { findInStore } from "../../assets/shop.data";
import { clearItemFromCart } from "../../redux/cart/cart-action";

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem, clearItemFromCart}) => {
    const { quantity, id } = cartItem;
    const { imageUrl, name, price } = findInStore(id);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="img"style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>{clearItemFromCart(id)}}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: id => dispatch(clearItemFromCart(id))
}) 

export default connect(null, mapDispatchToProps)(CheckoutItem)