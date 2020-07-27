import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CSS/seasons.css';

const SeasonsListContainer = (props) => {

    let seasonsArr = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

    const seasons = seasonsArr.map(season => <Link to={`seasons/${season}`} key={season}><li className="seasons-list">{season}</li></Link>)

    return (
        <div className="seasons-container">
            <ul>
                {seasons}
            </ul>
        </div>
    );
};

export default connect()(SeasonsListContainer);