import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMetadata }  from '../../Actions/metadataAction';
import { Button, Table} from 'semantic-ui-react';
import './CSS/players.css';

const PlayersContainer = ({ playersState, metadataState, updateMetadata }) => {

    const { current_page, total_pages } = metadataState;

    const handleForwardPagination = (evt) => {
        evt.preventDefault();
        updateMetadata(current_page + 1);
    };

    const handleBackwardPagination = (evt) => {
        evt.preventDefault();
        updateMetadata(current_page - 1);
    };

    // const uniqPlayer = () => {
    //     if(playersState.length){
    //         for(let i = 0; i <= playersState.length-1; i++){
    //             if(playersState[i+1]){
    //                 if(playersState[i].full_name !== playersState[i+1].full_name){
    //                     console.log(playersState[i].full_name)
    //                 }
    //             }
    //         }
    //     }
    // }
    // uniqPlayer();

    return (
        <div>
            <div className="table-container">
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
                        <Table.Cell><Link to={`/players/${player._id}`}>{player.full_name}</Link></Table.Cell>
                        <Table.Cell>{player.team.full_name ? player.team.full_name : player.team}</Table.Cell>
                    </Table.Row>
                    </Table.Body> )}
                </Table>
            </div>
            
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

const mapStatetoProps = (state) => {
    return{
        playersState: state.players,
        metadataState: state.metadata
    }
}

export default connect(mapStatetoProps, { updateMetadata })(PlayersContainer);