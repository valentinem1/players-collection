import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CSS/seasons.css';

import { Table, Button } from 'semantic-ui-react';

import { setSeasonsPlayers, setSeasonsMetadata, updateSeasonsMetadata } from '../../Actions/seasonsAction';

const SeasonContainer = (props) => {

    const { current_page, total_pages } = props.seasonState.metadata
    const yearParams = props.routerProps.match.params.year;

    useEffect(() => {
        fetch(`http://localhost:3000/players?[year][eq]=${yearParams}&page=${current_page}`)
        .then(r => r.json())
        .then(data => {
            props.setSeasonsPlayers(data.players);
            props.setSeasonsMetadata(data.metadata);
        })
    }, [current_page]);

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
                </Table.Row>
                </Table.Header>
                {props.seasonState.players.map(player => 
                <Table.Body key={player._id}>
                <Table.Row>
                    <Table.Cell><Link to={`/players/${player.full_name}`}>{player.full_name}</Link></Table.Cell>
                    <Table.Cell>{player.team.full_name ? player.team.full_name : player.team}</Table.Cell>
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