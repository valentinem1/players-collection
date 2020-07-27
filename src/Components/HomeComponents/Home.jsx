import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Button, Image } from 'semantic-ui-react';
import greekFreak from '../../images/greek-freak.svg';
import './CSS/home.css';

const Home = (props) => {
    
    return (
        <div style={props.sidebar ? {marginTop: "250px"} : {}} className="home-page-container">
            <Header className="home-page-title" >Welcome to NBA rating</Header>
            <Image className="greek-freak-logo" src={greekFreak} alt="greek-freak-logo" />
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

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar.active
    }
}

export default connect(mapStateToProps)(Home);