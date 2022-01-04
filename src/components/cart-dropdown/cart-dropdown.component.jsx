import React from "react";
import { connect } from "react-redux";

import './cart-dropdown.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component'
import { CartItem } from "../cart-item/cart-item.component";

import { findInStore } from "../../assets/shop.data";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">{
            cartItems.map((item)=>{
                const itemData = findInStore(item.id) 
                return <CartItem key={item.id} name={itemData.name} price={itemData.price} imageUrl={itemData.imageUrl} quantity={item.quantity} />
            })
        }</div>
        <CustomButton>Check out</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems }}) => {
    return ({cartItems})
}

export default connect(mapStateToProps)(CartDropdown)
