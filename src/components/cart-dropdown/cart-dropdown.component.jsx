import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import './cart-dropdown.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component'
import { CartItem } from "../cart-item/cart-item.component";
import { ReactComponent as CartIsEmpty } from '../../assets/icons/cart-is-empty.svg'

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectShopDataCollections } from "../../redux/shop-data/shop-data.selector"

import { toggleCartHiddenProperty } from "../../redux/cart/cart.action";

import { findInStore } from '../../redux/shop-data/shop-data.utils';

const CartDropdown = () => {
    
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const collections = useSelector(selectShopDataCollections);
    const navigate = useNavigate();

    return (
        <div className="cart-dropdown">{
            !!collections ?
            cartItems.length!==0 ?
            <div className="cart-items">{
                cartItems.map(({id, quantity})=>{
                    const { name, price, imageUrl } = findInStore(id); 
                    return <CartItem key={id} name={name} price={price} imageUrl={imageUrl} quantity={quantity} />
                })
            }</div>
            : <CartIsEmpty className="cart-is-empty"/>
            : null
            }
            <CustomButton onClick={()=>{
                navigate('/checkout')
                dispatch(toggleCartHiddenProperty());    
            }}>Check out</CustomButton>
        </div>
    )
}

export default CartDropdown
