import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../Actions/sidebarActions';
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

    return (
        <div ref={ref} className="header-container">
            <div className="sidebar-container-btn">
                <Button className="openbtn" onClick={handleSidebar}>☰</Button>
                <Link to="/">
                    <Header style={props.sidebar ? {marginLeft: "100%"} : {}} className="header-title">NBA Rating</Header>
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