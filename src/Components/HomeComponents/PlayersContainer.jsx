import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMetadata }  from '../../Actions/metadataAction';
import { Button, Table} from 'semantic-ui-react';

const PlayersContainer = ({ playersState, metadataState, updateMetadata }) => {

    const { current_page, total_pages } = metadataState;

    const handleForwardPagination = (evt) => {
        evt.preventDefault();
        updateMetadata(current_page + 1);
    }

    const handleBackwardPagination = (evt) => {
        evt.preventDefault();
        updateMetadata(current_page - 1);
    }

    return (
        <div>
            <Table striped className="players-table">
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            {playersState.map(player => 
                <Table.Body key={player._id}>
                <Table.Row>
                    <Table.Cell><Link to={`/players/${player._id}`}>{player.first_name + ' ' + player.last_name}</Link></Table.Cell>
                    <Table.Cell>{player.team.full_name}</Table.Cell>
                </Table.Row>
                </Table.Body> )}
            </Table>
            
            <div className="pagination-container">
                <div className="divagination-text"><Button hidden={current_page === 1 ? true : false} onClick={handleBackwardPagination} className="pagination-btn" role='img' aria-label="heart emoji">←</Button> Page {current_page} of {total_pages}<Button onClick={handleForwardPagination} className="pagination-btn" role='img' aria-label="heart emoji">→</Button></div>
            </div>
        </div>
    ); 
};

const mapStatetoProps = (state) => {
    return{
        playersState: state.players,
        metadataState: state.metadata
    }
}

export default connect(mapStatetoProps, { updateMetadata })(PlayersContainer);