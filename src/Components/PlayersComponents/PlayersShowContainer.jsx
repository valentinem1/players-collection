import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header, Table } from 'semantic-ui-react';
import './CSS/players.css';

import { setPlayerStats } from '../../Actions/playerStatsActions';

const PlayersShowContainer = (props) => {

    useEffect(() => {
        fetch(`http://localhost:3000/players?[full_name][eq]=${props.routerProps.match.params.name}`)
        .then(r => r.json())
        .then(data => props.setPlayerStats(data.players.reverse()));
    }, []);

    return (
        <div className="player-container">
            <Header className="player-name-header"></Header>
            <Table striped className="stats-table">
                <Table.Header className="table-header">
                <Table.Row>
                    <Table.HeaderCell>Season</Table.HeaderCell>
                    <Table.HeaderCell>Tm</Table.HeaderCell>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.HeaderCell>G</Table.HeaderCell>
                    <Table.HeaderCell>GS</Table.HeaderCell>
                    <Table.HeaderCell>MP</Table.HeaderCell>
                    <Table.HeaderCell>FG</Table.HeaderCell>
                    <Table.HeaderCell>FGA</Table.HeaderCell>
                    <Table.HeaderCell>FG%</Table.HeaderCell>
                    <Table.HeaderCell>eFG%</Table.HeaderCell>
                    <Table.HeaderCell>3P</Table.HeaderCell>
                    <Table.HeaderCell>3PA</Table.HeaderCell>
                    <Table.HeaderCell>3P%</Table.HeaderCell>
                    <Table.HeaderCell>2P</Table.HeaderCell>
                    <Table.HeaderCell>2PA</Table.HeaderCell>
                    <Table.HeaderCell>2P%</Table.HeaderCell>
                    <Table.HeaderCell>FT</Table.HeaderCell>
                    <Table.HeaderCell>FTA</Table.HeaderCell>
                    <Table.HeaderCell>FT%</Table.HeaderCell>
                    <Table.HeaderCell>ORB</Table.HeaderCell>
                    <Table.HeaderCell>DRB</Table.HeaderCell>
                    <Table.HeaderCell>TRB</Table.HeaderCell>
                    <Table.HeaderCell>AST</Table.HeaderCell>
                    <Table.HeaderCell>STL</Table.HeaderCell>
                    <Table.HeaderCell>BLK</Table.HeaderCell>
                    <Table.HeaderCell>TOV</Table.HeaderCell>
                    <Table.HeaderCell>PF</Table.HeaderCell>
                    <Table.HeaderCell>PTS</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.playerStats.map(player => 
                    <Table.Row key={player._id}>
                        <Table.Cell>{player.year-1}-{player.year.toString().slice(2)}</Table.Cell>
                        <Table.Cell>{player.team.abbreviation}</Table.Cell>
                        <Table.Cell>{player.position}</Table.Cell>
                        <Table.Cell>{player.stats.game}</Table.Cell>
                        <Table.Cell>{player.stats.gameStarted}</Table.Cell>
                        <Table.Cell>{player.stats.minutePlayed}</Table.Cell>
                        <Table.Cell>{player.stats.fieldGoal}</Table.Cell>
                        <Table.Cell>{player.stats.fieldGoalAttempt}</Table.Cell>
                        <Table.Cell>{player.stats.fieldGoalPercentage === 0 ? '0.000' : player.stats.fieldGoalPercentage}</Table.Cell>
                        <Table.Cell>{player.stats.effectiveFieldGoalPercentage === 0 ? '0.000' : player.stats.effectiveFieldGoalPercentage}</Table.Cell>
                        <Table.Cell>{player.stats.threePoint}</Table.Cell>
                        <Table.Cell>{player.stats.threePointAttempt}</Table.Cell>
                        <Table.Cell>{player.stats.threePointPercentage === 0 ? '0.000' : player.stats.threePointPercentage}</Table.Cell>
                        <Table.Cell>{player.stats.twoPoint}</Table.Cell>
                        <Table.Cell>{player.stats.twoPointAttempt}</Table.Cell>
                        <Table.Cell>{player.stats.twoPointPercentage === 0 ? '0.000' : player.stats.twoPointPercentage}</Table.Cell>
                        <Table.Cell>{player.stats.freeThrow}</Table.Cell>
                        <Table.Cell>{player.stats.freeThrowAttempt}</Table.Cell>
                        <Table.Cell>{player.stats.freeThrowPercentage === 0 ? '0.000' : player.stats.freeThrowPercentage}</Table.Cell>
                        <Table.Cell>{player.stats.offensiveRebounds}</Table.Cell>
                        <Table.Cell>{player.stats.defensiveRebounds}</Table.Cell>
                        <Table.Cell>{player.stats.totalRebounds}</Table.Cell>
                        <Table.Cell>{player.stats.assists}</Table.Cell>
                        <Table.Cell>{player.stats.steals}</Table.Cell>
                        <Table.Cell>{player.stats.blocks}</Table.Cell>
                        <Table.Cell>{player.stats.personalFouls}</Table.Cell>
                        <Table.Cell>{player.stats.turnovers}</Table.Cell>
                        <Table.Cell>{player.stats.points}</Table.Cell>
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        players: state.players,
        playerStats: state.playerStats,
        seasonState: state.seasons
    }
}

export default connect(mapStateToProps, { setPlayerStats })(PlayersShowContainer);