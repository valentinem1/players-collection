import React from 'react';
import { connect } from 'react-redux';
import { updateMetadata }  from '../../Actions/metadataAction';

import { Button } from 'semantic-ui-react';


import ProjectCard from './PlayersCard';

const PlayersContainer = ({ playersState, metadataState, updateMetadata }) => {

    const { current_page, total_pages } = metadataState;

    const playersArr =  playersState ? playersState.map(player => <ProjectCard key={player._id} player={player} />) : null

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
            <div className="players-container">
                {playersArr}
            </div>
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