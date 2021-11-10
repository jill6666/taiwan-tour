import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact strict />
        {/* TODO: replace components */}
        <Route path='/scenicspot' component={'scenicspot'} exact strict />
        <Route path='/restaurant' component={'restaurant'} exact strict />
        <Route path='/activity' component={'activity'} exact strict />
        <Route
          path='/scenicspot/:ID'
          component={(props) => {
            return <div {...props}></div>;
          }}
          exact strict
        />
        <Route
          path='/restaurant/:ID'
          component={(props) => {
            return <div {...props}></div>;
          }}
          exact strict
        />
        <Route
          path='/activity/:ID'
          component={(props) => {
            return <div {...props}></div>;
          }}
          exact strict
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
