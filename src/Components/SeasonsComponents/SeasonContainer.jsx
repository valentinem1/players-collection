import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSeasonsPlayers } from '../../Actions/seasonsAction';

const SeasonContainer = (props) => {

    const { current_page } = props.metadataState
    const yearParams = props.routerProps.match.params.year;

    useEffect(() => {
        fetch(`http://localhost:3000/players?[year][eq]=${yearParams}&page=${current_page}`)
        .then(r => r.json())
        .then(data => props.setSeasonsPlayers(data.players))
    }, []);

    ////// NEXT TASKS //////
    // create table to list players
    // link it to the playerShowContainer
    // add the pagination

    return (
        <div>
            Will hold players for each year
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        seasonState: state.seasons,
        metadataState: state.metadata
    }
}

export default connect(mapStateToProps, { setSeasonsPlayers })(SeasonContainer);