import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPlayers } from './Actions/playersAction';
import { setMetadata } from './Actions/metadataAction'

import Home from './Components/Home';
import PlayersContainer from './Components/HomeComponents/PlayersContainer';
import HeaderContainer from './Components/HeaderContainer';
import FooterContainer from './Components/FooterContainer';

import PlayersShowContainer from './Components/PlayersComponents/PlayersShowContainer'

import './CSS/App.css';

const App = (props) => {

  const { current_page } = props.metadataState;

  // fetch data from backend
  useEffect (() => {
    fetch(`http://localhost:3000/players?page=${current_page}`)
      .then(r => r.json())
      .then(data => {
        // set the state to the data back from the backend
        // console.log(data.metadata);
        props.setMetadata(data.metadata);
        props.setPlayers(data.players);
      });
  }, [current_page]);

  return (
    <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path='/players' component={ PlayersContainer } />
          <Route path="/players/:id" render={(routerProps) => <PlayersShowContainer routerProps={routerProps} />} />
          <Route render={() => <h2 className="404-error">404 Error - Page not found</h2>} />
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