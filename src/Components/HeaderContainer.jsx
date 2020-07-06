import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react'


const HeaderContainer = () => {

    // toggle sidebar
    const handleSidebar = () => {
        let sidebar = document.getElementById('mysidebar');

        if(sidebar.style.width === "250px"){
            return sidebar.style.width = "0"
        } return sidebar.style.width = "250px"
    }

    return (
        <div className="header-container">
            <div className="sidebar-container-btn">
                <Button className="openbtn" onClick={handleSidebar}>☰</Button>
                <Link to="/">
                    <Header className="header-title">NBA Rating</Header>
                </Link>
            </div>

            <div className="sidebar" id="mysidebar">
                <Link to="" className="closebtn" onClick={handleSidebar}>×</Link>
                <Link to="/" onClick={handleSidebar}>Home</Link>
                <Link to="/players" onClick={handleSidebar}>Players</Link>
                <Link to="/teams" onClick={handleSidebar}>Teams</Link>
            </div>
            
        </div>
    );
};

export default HeaderContainer;