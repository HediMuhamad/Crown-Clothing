import { UserActionTypes } from "./user.enums"

/*Starts - keys */
export const signUpWithEmailStart = (props) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_UP_START,
        payload: props
    }
}

export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    }
}

export const emailSignInStart = (props) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: props
    }
}

export const getCurrentUserFromStartupStart = () => {
    return {
        type: UserActionTypes.GET_CURRENT_USER_FROM_STARTUP_START
    }
}

export const signOutStart = () => {
    return {
        type: UserActionTypes.SIGN_OUT_START,
    }
}


/*Success - controler */
export const onSignInSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user,
    }
}

export const onSignOutSuccess = () => {
    return {
        type: UserActionTypes.SIGN_OUT_SUCCESS
    }
}

/*Failures - controler */
export const onAuthFailed = (error) => {
    return {
        type: UserActionTypes.AUTH_FAILURE,
        payload: error,
    }
}