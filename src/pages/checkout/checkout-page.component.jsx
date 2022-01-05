import React from 'react';
import { connect } from 'react-redux';

import './checkout-page.styles.scss'

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'><span>Product</span></div>
            <div className='header-block'><span>Description</span></div>
            <div className='header-block'><span>Quantity</span></div>
            <div className='header-block'><span>Price</span></div>
            <div className='header-block'><span>Remove</span></div>
        </div>
        <div className='cart-items-container'>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} {...cartItem} />)} {/*Why ==> {...cartItem} <== and not ==> cartItem = {cartItem} <== ? the first one send data indevedually which the item will be aware in every changes no like the second one which pass it as an array.*/}
        </div>
        <div className='total'><div>Total: ${totalPrice}</div></div>
    </div>
)
const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectCartItemsTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);