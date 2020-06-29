import React from 'react';

import { Header } from 'semantic-ui-react';

const Home = (props) => {
    
    return (
        <div className="home-page-container">
                <Header className="home-page-header">Welcome to NBA rating</Header>
            <div className="about-image-container">
                <p className="home-page-about">NBA rating is an application where you can rate and browse your favorite player's stats.</p>
            </div>
        </div>
    );
};

export default Home;