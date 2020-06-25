export const setPlayers = (players) => {
    // console.log('from action', players)
    return {
        type: "SET PLAYERS",
        players
    }
}

export const updateLikes = (player) => {
    return {
        type: "INCREASE LIKES",
        player
    }
}