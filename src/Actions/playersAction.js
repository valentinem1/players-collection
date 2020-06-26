export const setPlayers = (players) => {
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

export const updateDislikes = (player) => {
    return {
        type: "INCREASE DISLIKES",
        player
    }
}