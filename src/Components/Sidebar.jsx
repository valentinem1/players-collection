import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../Actions/sidebarActions';

const Sidebar = (props) => {

    const ref = useRef();

    const handleClick = (evt) => {
        if (ref.current && !ref.current.contains(evt.target)) {
            props.toggleSidebar(!props.sidebar);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);

        // remove event listener so when clicking anywhere on page it does not toggle the sidebar.
        // allows to only close sidebar when clicking outside the sidebar or close btn.
        return () => {
            document.removeEventListener("click", handleClick);
        }
    });

    const handleCloseSidebar = () => {
        props.toggleSidebar(!props.sidebar);
    }

    return (
        <div ref={ref} id="sidebar" className={!props.sidebar ? 'closed-sidebar' : "sidebar"}>
            <Link to="" className="closebtn" onClick={handleCloseSidebar}>×</Link>
            <Link to="/" onClick={handleCloseSidebar}>Home</Link>
            <Link to="/players" onClick={handleCloseSidebar}>Players</Link>
            <Link to="/teams" onClick={handleCloseSidebar}>Teams</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar.active
    }
}

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);