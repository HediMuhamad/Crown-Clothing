import { CartActionTypes } from "./cart-enums";

export const toggleCartHiddenProperty = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN_PROPERTY,
})

export const addItemToCart = (itemID) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: itemID,
})

export const clearItemFromCart = (itemID) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: itemID,
})

export const removeItemFromCart = (itemID) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: itemID,
})