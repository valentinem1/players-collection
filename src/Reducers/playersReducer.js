import { updateDislikes } from "../Actions/playersAction";

const initialState = [

];

const playersReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET PLAYERS":
            return action.players;

        case "INCREASE LIKES":
            const updatedLikes = state.map(player => player._id === action.player._id ? action.player : player);
            return updatedLikes;

        case "INCREASE DISLIKES":
            const updatedDislikes = state.map(player => player._id === action.player._id ? action.player : player); 
            return updatedDislikes;
        default:
            return state;
    }
}

export default playersReducer;