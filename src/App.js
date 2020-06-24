import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPlayers } from './Actions/playersAction';

import Home from './Components/Home';
import Header from './Components/Header';

import './App.css';

const App = (props) => {

  const { setPlayers } = props;

  // fetch data from backend
  useEffect (() => {
      fetch('http://localhost:3000/players')
      .then(r => r.json())
      .then(data => {
        // set the state to the data back from the backend
        setPlayers(data.players);
      });
  }, []);

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps, { setPlayers })(withRouter(App));