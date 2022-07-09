import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import Tooltip from '../../components/tooltip/tooltip.component';
import { ReactComponent as CartIsEmpty } from '../../assets/icons/cart-is-empty.svg'

import './checkout-page.styles.scss'

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartItemsTotal);

    return (
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
            { cartItems.length!==0 ?
                <div className='footer'>
                    <StripeButton className="my-stripe-button" total={totalPrice}/>
                    <Tooltip className="tooltip">Please click TEST MODE at the top right of the screen after clicking PAY NOW button to get a card to test payment.</Tooltip>
                </div>
            : <CartIsEmpty className='cart-is-empty'/> }
        </div>
    )
}

export default CheckoutPage;