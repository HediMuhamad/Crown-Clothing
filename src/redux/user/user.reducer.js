import { UserActionTypes } from './user.enums'

const INITICAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITICAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.AUTH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state;
    }
}

export default userReducer;