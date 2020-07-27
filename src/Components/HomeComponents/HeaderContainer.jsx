import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Actions/sidebarActions';
import { toggleDarkModeButton } from '../../Actions/darkModeAction';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';
import Sidebar from './Sidebar';

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
        props.toggleSidebar(true);
    }

    const handleToggleButton = (evt) => {
        props.toggleDarkModeButton(evt.target.checked);
    }

    // darkMode style
    const toggleSidebarWithDarkMode = () => {
        if(props.sidebar && !props.darkMode){
            return { marginLeft: '100%' }
        } else if(props.sidebar && props.darkMode){
            return { 
                backgroundColor: '#010101',
                color: '#ccc',
                marginLeft: '100%'
            }
        } else if(props.darkMode && !props.sidebar){
            return {
                backgroundColor: '#010101',
                color: '#ccc'
            }
        }
    }

    return (
        <div ref={ref} className="header-container" style={ props.darkMode ? { backgroundColor: '#010101', color: '#ccc' } : {} } >
            <div className="sidebar-container-btn">
                <Button className={ props.sidebar ? "hide-open-btn" : "openbtn"} onClick={handleSidebar} style={ props.darkMode ? { backgroundColor: '#010101', color: '#ccc' } : {} }>☰</Button>
                <Link to="/">
                    <Header style={toggleSidebarWithDarkMode()} className="header-title">NBA Rating</Header>
                </Link>
            </div>  
            <Sidebar /> 
            <label className="switch">
                <input type="checkbox" onClick={handleToggleButton} checked={props.darkMode}/>
                <span className="slider-btn"></span>
            </label>        
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