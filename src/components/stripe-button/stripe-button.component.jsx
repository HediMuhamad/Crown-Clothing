import React from 'react'
import { useDispatch } from 'react-redux';
import { clearTheCart } from '../../redux/cart/cart.action'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const StripeButton = ({total}) => {

    const dispatch = useDispatch();

    const paymentValue = total * 100;
    const stripePublishableKey = 'pk_test_51KFLDoC8mVC4Hkc9np6TvYtdwSEc1Bff1KbjAPv27xRODepgyBwkmsJ3qjOgogEqSvfgVnHcPhQHfnraeZr6k6mM00EFTVFEzQ';

    return (
        <StripeCheckout
            className="my-stripe-button"
            label={`PAY NOW | $${total}`}
            panelLabel='Pay Now'
            name="Crwon Clothing Ltd."
            billingAddress
            shippingAddress
            allowRememberMe
            image="logo512.png"
            description={`Your total is $${total}`}
            amount={paymentValue}
            token={()=>dispatch(clearTheCart())}
            stripeKey={stripePublishableKey}
        />
    )
}

export default StripeButton;