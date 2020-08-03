import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CSS/seasons.css';

import { Table, Button } from 'semantic-ui-react';

import { setSeasonsPlayers, setSeasonsMetadata, updateSeasonsMetadata } from '../../Actions/seasonsAction';

const SeasonContainer = (props) => {

    const { current_page, total_pages } = props.seasonState.metadata
    const yearParams = props.routerProps.match.params.year;

    // useEffect(() => {
    //     fetch(`http://localhost:3000/players?[year][eq]=${yearParams}&page=${current_page}`)
    //     .then(r => r.json())
    //     .then(data => {
    //         props.setSeasonsPlayers(data.players);
    //         props.setSeasonsMetadata(data.metadata);
    //     })
    // }, [current_page]);

    const handleForwardPagination = (evt) => {
        evt.preventDefault();
        props.updateSeasonsMetadata(current_page + 1);
    };

    const handleBackwardPagination = (evt) => {
        evt.preventDefault();
        props.updateSeasonsMetadata(current_page - 1);
    };

    return (
        <div className="table-container">
            <Table striped className="players-table">
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
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
                {props.seasonState.players.map(player => 
                <Table.Body key={player._id}>
                <Table.Row>
                    <Table.Cell><Link to={`/players/${player.full_name}`}>{player.full_name}</Link></Table.Cell>
                    <Table.Cell>{player.team.full_name ? player.team.full_name : player.team}</Table.Cell>
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
                </Table.Body> )}
            </Table>

            <div className="pagination-container">
                <div className="pagination-text">
                    <Button hidden={ current_page === 1 ? true : false } onClick={ handleBackwardPagination } className="pagination-btn" role='img' aria-label="arrow emoji">←</Button> 
                        Page {current_page} of {total_pages}
                    <Button hidden={ current_page === total_pages ? true : false } onClick={ handleForwardPagination } className="pagination-btn" role='img' aria-label="arrow emoji">→</Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        seasonState: state.seasons
    }
}

export default connect(mapStateToProps, { setSeasonsPlayers, setSeasonsMetadata, updateSeasonsMetadata })(SeasonContainer);