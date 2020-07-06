import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

const Home = (props) => {
    
    return (
        <div className="home-page-container">
                <Header className="home-page-header">Welcome to NBA rating</Header>
            <div className="about-container">
                <p className="home-page-about">Browse your favorite player here.</p>
                <Button className="explore-btn"><Link to="/players">Explore</Link></Button>
                <div className="arrow-container">
                    <span className="arrow-up-desc" id="arrow-up">↑</span>
                    <p className="arrow-up-desc">Old School button</p>
                </div>
            </div>
        </div>
    );
};

export default Home;