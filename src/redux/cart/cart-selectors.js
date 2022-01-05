import { createSelector } from 'reselect';

import { findInStore } from '../../assets/shop.data';

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity
        , 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * findInStore(cartItem.id).price
        , 0)
)
