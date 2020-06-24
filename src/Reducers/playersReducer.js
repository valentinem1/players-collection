const initialState = {

};

const playersReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET PLAYERS":
            const players = action.players;
            return {...state, players}

        default:
            return state;
    }
}

export default playersReducer;