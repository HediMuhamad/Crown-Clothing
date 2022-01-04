import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHiddenProperty } from '../../redux/cart/cart-action'

import './cart-icon.styles.scss'
import { ReactComponent as TheBag } from '../../assets/icons/cart-icon.svg'

const CartIcon = ({cartItemsCount, toggleCartDropdownHiddenProperty}) => (
    <div className='cart-icon' onClick={toggleCartDropdownHiddenProperty}>
        <TheBag className='the-bag'/>
        <span className='item-count'>{cartItemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdownHiddenProperty: () => dispatch(toggleCartHiddenProperty())
})

const mapStateToProps = state => ({
    cartItemsCount: state.cart.cartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);