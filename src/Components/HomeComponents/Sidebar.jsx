import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../../Actions/sidebarActions';
import './CSS/sidebar.css';

const Sidebar = (props) => {

    const handleCloseSidebar = () => {
        props.toggleSidebar(false);
    }

    return (
        <div id="sidebar" className={!props.sidebar ? 'closed-sidebar' : "sidebar"}>
            <Link to="/" onClick={handleCloseSidebar}>Home</Link>
            <Link to="/seasons" onClick={handleCloseSidebar}>Seasons</Link>
            <Link to="/players" onClick={handleCloseSidebar}>Players</Link>
            <Link to="/teams" onClick={handleCloseSidebar}>Teams</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar.active,
        darkMode: state.darkMode.active
    }
}

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);