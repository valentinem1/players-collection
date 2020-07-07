import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../Actions/sidebarActions';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';
import Sidebar from './Sidebar';

const HeaderContainer = (props) => {

    // toggle sidebar
    const handleSidebar = () => {
        props.toggleSidebar(true);
    }

    return (
        <div className="header-container">
            <div className="sidebar-container-btn">
                <Button className="openbtn" onClick={handleSidebar}>☰</Button>
                <Link to="/">
                    <Header style={props.sidebar ? {marginLeft: "85%"} : {}} className="header-title">NBA Rating</Header>
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

export default connect(mapStateToProps, { toggleSidebar })(HeaderContainer);