import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './cart-dropdown.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component'
import { CartItem } from "../cart-item/cart-item.component";
import { ReactComponent as CartIsEmpty } from '../../assets/icons/cart-is-empty.svg'

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHiddenProperty } from "../../redux/cart/cart.action";

import { findInStore } from '../../redux/shop-data/shop-data.utils';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">{
        cartItems.length!==0 ? <div className="cart-items">{
            cartItems.map(({id, quantity})=>{
                const { name, price, imageUrl } = findInStore(id); 
                return <CartItem key={id} name={name} price={price} imageUrl={imageUrl} quantity={quantity} />
            })
            }</div> : <CartIsEmpty className="cart-is-empty"/> 
        }
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
