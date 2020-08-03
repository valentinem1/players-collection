const initialState = [

];

const playersReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET PLAYERS":
            return action.players;

        default:
            return state;
    }
}

export default playersReducer;