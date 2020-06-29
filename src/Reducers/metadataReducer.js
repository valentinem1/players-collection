const initialState = {

};

const metadataReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET METADATA":
            return action.metadata;

        case "UPDATE METADATA":
            // console.log(state.current_page)
            return {...state, current_page: action.data+1};

        default:
            return state;
    }
}

export default metadataReducer;