import DIRECTORY from "./sections.data"; 

const INITIAL_STATE = {
    sections: DIRECTORY
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer