import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SeasonsListContainer = (props) => {

    let yearsArr = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

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