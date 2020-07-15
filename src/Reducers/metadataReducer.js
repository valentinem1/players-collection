const initialState = {
    current_page: 1
}

const metadataReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET METADATA":
            return action.data;

        case "UPDATE METADATA":
            return {...state, current_page: action.current_page};

        default:
            return state;
    }
}

export default metadataReducer;