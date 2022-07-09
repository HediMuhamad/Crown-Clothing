import { AppActionTypes } from "./app.enums"

const INITIAL_STATE = {
	show: false,
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case AppActionTypes.TOGGLE_MENU_LIST_SHOW_PROPERTY: {
			return {
				...state,
				show: !state.show,
			}
		}
		default: {
			return state
		}
	}
}

export default appReducer;