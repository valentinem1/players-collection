const initialState = {
    active: false
}

const darkModeReducer = (state=initialState, action) => {
    switch(action.type){

        case "TOGGLE DARK MODE BUTTON":
            return {...state, active: action.toggled};
            
        default:
            return state;
    }
}

export default darkModeReducer;