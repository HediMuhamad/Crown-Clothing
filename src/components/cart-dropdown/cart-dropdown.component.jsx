import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './cart-dropdown.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component'
import { CartItem } from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHiddenProperty } from "../../redux/cart/cart-action";

import { findInStore } from "../../assets/shop.data";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">{
            cartItems.map((item)=>{
                const itemData = findInStore(item.id) 
                return <CartItem key={item.id} name={itemData.name} price={itemData.price} imageUrl={itemData.imageUrl} quantity={item.quantity} />
            })
        }</div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHiddenProperty());    
        }}>Check out</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
