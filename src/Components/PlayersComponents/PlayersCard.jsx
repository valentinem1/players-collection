import React from 'react';
import { connect } from 'react-redux';
import { updateLikes, updateDislikes } from '../../Actions/playersAction';

import { Card, Header, Image, Button } from 'semantic-ui-react';

const PlayersCard = ({ player, updateLikes, updateDislikes, playersState }) => {

    // handle fetch for likes
    const handleClickLikes = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:3000/players/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: likes + 1
            })
        })
        .then(r => r.json())
        .then(playerData => {
            updateLikes(playerData.data.player);
        })
    }

    // handle fetch for dislikes
    const handleClickDislikes = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:3000/players/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dislikes: dislikes + 1
            })
        })
        .then(r => r.json())
        .then(playerData => {
            updateDislikes(playerData.data.player);
        })
    }

    
    const { _id, first_name, last_name, image, likes, dislikes } = player;

    return (
        <div>
            <Card className="player-card">
                <Image className="player-image" src={image} alt="players picture" />
                <Header className="player-header">{first_name + ' ' + last_name}</Header>
                <div className="player-likes-container">
                    <Button onClick={handleClickLikes} className="likes-btn player-likes-btn">{likes} <span role='img' aria-label="heart emoji">❤️</span></Button>
                    <Button onClick={handleClickDislikes} className="dislikes-btn player-likes-btn">{dislikes} <span role='img' aria-label="broken heart emoji">💔</span></Button>
                </div>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.players)
    return{
        playersState: state.players
    }
}

export default connect(mapStateToProps, { updateLikes, updateDislikes })(PlayersCard);