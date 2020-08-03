import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header, Table, Button } from 'semantic-ui-react';
import './CSS/players.css';

import TableContainer from './TableContainer';

import { setPlayerStats } from '../../Actions/playerStatsActions';
import { setSeasonsPlayers, setSeasonsMetadata, updateSeasonsMetadata } from '../../Actions/seasonsAction';

const PlayersShowContainer = (props) => {

    const { current_page, total_pages } = props.seasonState.metadata
    const yearParams = props.routerProps.match.params.year;

    useEffect(() => {
        fetch(`http://localhost:3000/players?[full_name][eq]=${props.routerProps.match.params.name}`)
        .then(r => r.json())
        .then(data => props.setPlayerStats(data.players));
        
        if(yearParams){
            fetch(`http://localhost:3000/players?[year][eq]=${yearParams}&page=${current_page}`)
            .then(r => r.json())
            .then(data => {
                props.setSeasonsPlayers(data.players);
                props.setSeasonsMetadata(data.metadata);
            })
            .catch(err => console.log(err));
        }
    }, [current_page]);


    return (
        <div className="player-container">
            <Header className="player-name-header" hidden={yearParams ? true : false}>{`${props.routerProps.match.params.name}`}</Header>
            <Table striped className="stats-table">
                <Table.Header className="table-header">
                <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
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
            </Table>
            {yearParams ? props.seasonState.players.map(player => <TableContainer player={player} key={player._id} routerProps={props.routerProps}/>) : props.players.map(player => <TableContainer player={player} key={player._id}/>)}
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

export default connect(mapStateToProps, { setPlayerStats, setSeasonsPlayers, setSeasonsMetadata, updateSeasonsMetadata })(PlayersShowContainer);