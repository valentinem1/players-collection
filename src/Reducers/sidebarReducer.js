const initialState = {
    active: false
}

const sidebarReducer = (state=initialState, action) => {
    switch(action.type){

        case "TOGGLE SIDEBAR":
            return {...state, active: action.data};
            
        default:
            return state;
    }
}

export default sidebarReducer;