const initialState = [

];

const playersReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET PLAYERS":
            // console.log('from reducer', action.players);
            return action.players;

        case "INCREASE LIKES":
            // console.log('from reducer', state);
            const updatedLikes = state.map(player => player._id === action.player._id ? action.player : player);
            return updatedLikes

        default:
            return state;
    }
}

export default playersReducer;