const initialState = [

]

const seasonsReducer = (state=initialState, action) => {
    switch(action.type){
        
        case "SET SEASONS PLAYERS":
            return action.players;

        default:
            return state;
    }
}

export default seasonsReducer;