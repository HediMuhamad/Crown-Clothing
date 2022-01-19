import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHiddenProperty } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss'
import { ReactComponent as TheBag } from '../../assets/icons/cart-icon.svg'

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(selectCartItemsCount)


    return (
        <div className='cart-icon' onClick={()=>dispatch(toggleCartHiddenProperty())}>
            <TheBag className='the-bag'/>
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;