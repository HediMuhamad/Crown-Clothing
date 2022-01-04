import { CartActionTypes } from "./cart-enums";

export const toggleCartHiddenProperty = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN_PROPERTY,
})