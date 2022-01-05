import { UserActionTypes } from './user.enums'

const INITICAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITICAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER :
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;