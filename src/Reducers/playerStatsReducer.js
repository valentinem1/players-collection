const initialState = [

]

const playerStatsReducer = (state=initialState, action) => {
    switch(action.type){

        case "SET PLAYER STATS":
            return action.data

        default:
            return state;
    }
}

export default playerStatsReducer;