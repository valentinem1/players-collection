const initialState = {
    active: false
}

const sidebarReducer = (state=initialState, action) => {
    switch(action.type){

        case "OPEN SIDEBAR":
            return {...state, active: action.data};

        case "CLOSE SIDEBAR":
            return {...state, active: action.data};

        default:
            return state;
    }
}

export default sidebarReducer;