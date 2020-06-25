import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './PlayersCard';

import { Card } from 'semantic-ui-react';

const PlayersContainer = (props) => {
    
    const { players } = props.playersState;
    // console.log(props.playersState.players)
    const playersArr =  players ? players.map(player => <ProjectCard key={player._id} player={player} />) : null

    return (
        <div className="players-container">
                {playersArr}
        </div>
    );
};

const mapStatetoProps = (state) => {
    return{
        playersState: state.players
    }
}

export default connect(mapStatetoProps)(PlayersContainer);