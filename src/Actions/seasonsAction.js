export const setSeasonsPlayers = (players) => {
    return{
        type: "SET SEASONS PLAYERS",
        players
    }
}

export const setSeasonsMetadata = (data) => {
    return{
        type: "SET SEASONS METADATA",
        data
    }
}

export const updateSeasonsMetadata = (current_page) => {
    return {
        type: "UPDATE SEASONS METADATA",
        current_page
    }
}