import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SeasonsListContainer = (props) => {

    let yearsArr = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    const year = yearsArr.map(year => <Link to={`seasons/${year}`} key={year}><li>{year}</li></Link>)

    return (
        <div>
            <ul>
                {year}
            </ul>
        </div>
    );
};

export default connect()(SeasonsListContainer);