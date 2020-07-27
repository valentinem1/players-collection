import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Actions/sidebarActions';
import { toggleDarkModeButton } from '../../Actions/darkModeAction';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';
import Sidebar from './Sidebar';
import './CSS/dark-mode.css';
import './CSS/header.css';

const HeaderContainer = (props) => {

    const ref = useRef();

    const handleClick = (evt) => {
        if (ref.current && !ref.current.contains(evt.target)) {
            props.toggleSidebar(false);
        }
    }
    
    useEffect((props) => {
        document.addEventListener("click", handleClick);
        
        // allows to only close sidebar when clicking outside the sidebar or close btn.
        // remove event listener so when clicking anywhere on page it does not toggle the sidebar.
        return () => {
            document.removeEventListener("click", handleClick);
        }
    });

    // toggle sidebar
    const handleSidebar = () => {
        props.toggleSidebar(!props.sidebar);
    }

    const handleToggleButton = (evt) => {
        props.toggleDarkModeButton(evt.target.checked);
    }

    const darkModeStyling = () => {
        return props.darkMode ? { backgroundColor: '#010101', color: '#ccc' } : {}
    }

    return (
        <div ref={ref} className="header-container" style={darkModeStyling()} >
            <Link to="/">
                <Header style={darkModeStyling()} className="header-title">NBA Rating</Header>
            </Link>
            <Sidebar />
            <div className='sidebar-container-btn'>
                <label className="switch">
                    <input type="checkbox" onClick={handleToggleButton} checked={props.darkMode}/>
                    <span className="slider-btn"></span>
                </label>
                <Button className="openbtn" onClick={handleSidebar} style={darkModeStyling()}>☰</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar.active,
        darkMode: state.darkMode.active
    };
};

export default connect(mapStateToProps, { toggleSidebar, toggleDarkModeButton })(HeaderContainer);