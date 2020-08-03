const initialState = {
    players: [],
    metadata: {
        current_page: 1
    }
}

const seasonsReducer = (state=initialState, action) => {
    switch(action.type){
        
        case "SET SEASONS PLAYERS":
            return { ...state, players: action.players };

        case "SET SEASONS METADATA":
            return { ...state, metadata: action.data }

        case "UPDATE SEASONS METADATA":
            return { ...state, 
                    metadata: {
                        ...state.metadata, current_page: action.current_page
                    }
                }

        default:
            return state;
    }
}

export default seasonsReducer;