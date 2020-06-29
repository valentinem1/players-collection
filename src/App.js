import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPlayers } from './Actions/playersAction';
import { setMetadata } from './Actions/metadataAction'

import Home from './Components/Home';
import PlayersContainer from './Components/PlayersComponents/PlayersContainer';
import HeaderContainer from './Components/HeaderContainer';
import FooterContainer from './Components/FooterContainer';

import './App.css';

const App = ({ setPlayers, setMetadata, metadataState }) => {

  const { current_page } = metadataState;
  // fetch data from backend
  useEffect (() => {
      fetch(`http://localhost:3000/players?page=${current_page}`)
      .then(r => r.json())
      .then(data => {
        // set the state to the data back from the backend
        setMetadata(data.metadata);
        setPlayers(data.players);
      });
  }, []);

  return (
    <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path={`/players/:page`} component={ PlayersContainer } />
        </Switch>
        <FooterContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    metadataState: state.metadata
  }
}

export default connect(mapStateToProps, { setPlayers, setMetadata })(withRouter(App));