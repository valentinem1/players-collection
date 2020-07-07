import React from 'react';
import { connect } from 'react-redux';
import { openSidebar } from '../Actions/sidebarActions';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';
import Sidebar from './Sidebar';

const HeaderContainer = (props) => {

    // let sidebar = document.getElementById('mysidebar');
    // let homePageHeader = document.getElementById('home-page-header');
    // let pageHeader = document.getElementById('header-title');

    // toggle sidebar
    const handleSidebar = () => {
        props.openSidebar(true);

        // sidebar.style.width = "18%"
        // homePageHeader.style.marginLeft = "250px"
        // homePageHeader.style.transition = "2s"
        // pageHeader.style.marginLeft = "250px"
        // pageHeader.style.transition = "0.5s"
    }

    return (
        <div className="header-container">
            <div className="sidebar-container-btn">
                <Button className="openbtn" onClick={handleSidebar}>☰</Button>
                <Link to="/">
                    <Header style={props.sidebar ? {marginLeft: "250px"} : {}} className="header-title">NBA Rating</Header>
                </Link>
            </div>  
            <Sidebar />          
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar.active
    };
};

export default connect(mapStateToProps, { openSidebar })(HeaderContainer);