import { CartActionTypes } from "./cart-enums";
import { cartItemHanlder } from "./cart-utils";

const INITIAL_STATE = {
    hidden: true,
    cartItemsCount: 0,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN_PROPERTY:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: cartItemHanlder(state.cartItems, action.payload),
                cartItemsCount: state.cartItemsCount+1,
            }
        default:
            return state;
    }
}

export default cartReducer;