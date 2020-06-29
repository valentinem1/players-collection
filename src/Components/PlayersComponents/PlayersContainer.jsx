import React from 'react';
import { connect } from 'react-redux';
import { updateMetadata }  from '../../Actions/metadataAction';

import { Button } from 'semantic-ui-react';


import ProjectCard from './PlayersCard';

const PlayersContainer = ({ playersState, metadataState, updateMetadata }) => {

    const { current_page, total_pages } = metadataState;

    const playersArr =  playersState ? playersState.map(player => <ProjectCard key={player._id} player={player} />) : null

    // const handlePagination = (evt) => {
    //     evt.preventDefault();
    //     updateMetadata(current_page);
    // }

    console.log(current_page);
    return (
        <div>
            <div className="players-container">
                {playersArr}
            </div>
            {/* <div className="pagination-container">
                <p className="pagination-text">Page {current_page} of {total_pages} <Button onClick={handlePagination} className="pagination-btn" role='img' aria-label="heart emoji">→</Button></p>
            </div> */}
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