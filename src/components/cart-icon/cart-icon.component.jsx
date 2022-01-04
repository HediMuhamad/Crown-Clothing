import React from 'react';

import './cart-icon.styles.scss'
import { ReactComponent as TheBag } from '../../assets/icons/cart-icon.svg'

export const CartIcon = () => (
    <div className='cart-icon' >
        <TheBag className='the-bag'/>
        <span className='item-count'>45</span>
    </div>
)