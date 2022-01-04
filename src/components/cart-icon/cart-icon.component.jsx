import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHiddenProperty } from '../../redux/cart/cart-action'

import './cart-icon.styles.scss'
import { ReactComponent as TheBag } from '../../assets/icons/cart-icon.svg'

const CartIcon = ({toggleCartDropdownHiddenProperty}) => (
    <div className='cart-icon' onClick={toggleCartDropdownHiddenProperty}>
        <TheBag className='the-bag'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdownHiddenProperty: () => dispatch(toggleCartHiddenProperty())
})

export default connect(null, mapDispatchToProps)(CartIcon);