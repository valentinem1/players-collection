import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import GameTable from './PlayersStatsTablesComponents/GameTable';
import FieldGoalsTable from './PlayersStatsTablesComponents/FieldGoalsTable';
import FreeThrowTable from './PlayersStatsTablesComponents/FreeThrowTable';
import ReboundsTable from './PlayersStatsTablesComponents/ReboundsTable';
import AssistsStealsTable from './PlayersStatsTablesComponents/AssistsStealsTable';
import TurnoversFouls from './PlayersStatsTablesComponents/TurnoversFouls';

const PlayersShowContainer = (props) => {

    useEffect(() => {
        fetch(`http://localhost:3000/players/${props.routerProps.match.params.id}`)
        .then(r => r.json())
        .then(player => console.log(player));
    }, []);

    // find corresponding player from url in state
    // to display the players' info
    const player = props.players ? props.players.find(player => player._id === props.routerProps.match.params.id) : null

    if(player){
        return (
            <div>
                <Header className="player-name-header">{`${player.first_name} ${player.last_name ? player.last_name : ''}`}</Header>
                <GameTable player={player}/>
                <FieldGoalsTable player={player}/>
                <FreeThrowTable player={player}/>
                <ReboundsTable player={player}/>
                <AssistsStealsTable player={player} />
                <TurnoversFouls player={player} />
            </div>
        );
    } return (
        <div className="loader"></div>
    )
};

const mapStateToProps = (state) => {
    return{
        players: state.players
    }
}

export default connect(mapStateToProps)(PlayersShowContainer);