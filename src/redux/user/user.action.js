import { UserActionTypes } from "./user.enums"

export const setCurrentUser = (user) => {
    return{
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}