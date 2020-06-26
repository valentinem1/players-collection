import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPlayers } from './Actions/playersAction';

import Home from './Components/Home';
import HeaderContainer from './Components/HeaderContainer';

import './App.css';

const App = ({ setPlayers }) => {

  // fetch data from backend
  useEffect (() => {
      fetch('http://localhost:3000/players')
      .then(r => r.json())
      .then(data => {
        // set the state to the data back from the backend
        // console.log(data.players)
        setPlayers(data.players);
      });
  }, []);

  return (
    <div className="App">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
    </div>
  );
};

export default connect(null, { setPlayers })(withRouter(App));