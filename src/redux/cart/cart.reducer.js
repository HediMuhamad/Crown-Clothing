import { CartActionTypes } from "./cart.enums";
import { addItemToCartHandler, clearItemFromCartHandler, removeItemFromCartHandler } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
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
                cartItems: addItemToCartHandler(state.cartItems, action.payload),
            }

        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCartHandler(state.cartItems, action.payload),
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCartHandler(state.cartItems, action.payload),
            }

        case CartActionTypes.CLEAR_THE_CART:
            return{
                ...state,
                cartItems: []
            }

        default:
            return state;
    }
}

export default cartReducer;