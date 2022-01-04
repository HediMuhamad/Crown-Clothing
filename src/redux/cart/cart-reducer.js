import { CartActionTypes } from "./cart-enums";

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
                cartItems: cartItemHanlder(state.cartItems, action.payload),
            }
        default:
            return state;
    }
}

const cartItemHanlder = (arr, id) => {
    const findResult = arr.findIndex((item)=>item.id===id);
    findResult===-1 ? arr.push({id: id, quantity: 1}) : arr[findResult].quantity=arr[findResult].quantity+1
    return arr;
}

export default cartReducer;