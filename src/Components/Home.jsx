import React from 'react';

import Header from './Header';
import PlayersContainer from './PlayersComponents/PlayersContainer';

const Home = (props) => {
    
    return (
        <div>
            <Header />
            <PlayersContainer />
        </div>
    );
};

export default Home;