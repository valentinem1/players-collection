import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSidebar } from '../Actions/sidebarActions';

const Sidebar = (props) => {

    const handleCloseSidebar = () => {
        props.closeSidebar(false);
    }

    return (
        <div className={!props.sidebar ? 'closed-sidebar' : "sidebar"}>
            <Link to="" className="closebtn" onClick={handleCloseSidebar}>×</Link>
            <Link to="/" onClick={handleCloseSidebar}>Home</Link>
            <Link to="/players" onClick={handleCloseSidebar}>Players</Link>
            <Link to="/teams" onClick={handleCloseSidebar}>Teams</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.sidebar.open);
    return{
        sidebar: state.sidebar.active
    }
}

export default connect(mapStateToProps, { closeSidebar })(Sidebar);