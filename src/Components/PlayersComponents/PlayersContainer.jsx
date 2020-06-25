import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './PlayersCard';

import { Card } from 'semantic-ui-react';

const PlayersContainer = ({ playersState }) => {

    const playersArr =  playersState ? playersState.map(player => <ProjectCard key={player._id} player={player} />) : null

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