import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

import { updateLikes } from '../../Actions/playersAction';

const PlayersCard = ({ player, updateLikes }) => {

    // const { _id, first_name, last_name, image, likes } = player;

    return (
        <div>
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        playersState: state.players
    }
}

export default connect(mapStateToProps, { updateLikes })(PlayersCard);

// handle fetch for likes
    // const handleClickLikes = (evt) => {
    //     evt.preventDefault();
    //     fetch(`http://localhost:3000/players/${_id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             likes: likes + 1
    //         })
    //     })
    //     .then(r => r.json())
    //     .then(playerData => {
    //         updateLikes(playerData.data.player);
    //     })
    // }
{/* <Button onClick={handleClickLikes} className="player-likes-btn">{likes} <span role='img' aria-label="heart emoji">❤️</span></Button> */}