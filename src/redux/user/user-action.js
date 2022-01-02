export const SetCurrentUser = (user) => {
    return{
        type: 'SET_CURRENT_USER',
        payload: user,
    }
}