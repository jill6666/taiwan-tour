import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import './index.css';
import Scenicspots from './pages/ScenicSpot'
import ScenicSpotPage  from './pages/ScenicSpotPage';
// TODO: replace components after merge
const Scenicspot = () => <div> <Scenicspots/> </div>
const Restaurant = () => <div>Restaurant</div>
const Activity = () => <div>Activity</div>
// TODO: get api data by ${props.match.params.ID} of url
//const ScenicspotPage = (props) => <div>ScenicspotPage {props.match.params.ID}</div>
const RestaurantPage = (props) => <div>RestaurantPage {props.match.params.ID}</div>
const ActivityPage = (props) => <div>ActivityPage {props.match.params.ID}</div>

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact strict />
        <Route path='/scenicspot' component={Scenicspot} exact strict />
        <Route path='/restaurant' component={Restaurant} exact strict />
        <Route path='/activity' component={Activity} exact strict />
        <Route
          path='/scenicspot/:ID'
          component={(props) => {
            return <ScenicSpotPage {...props}></ScenicSpotPage>;
          }}
          exact strict
        />
        <Route
          path='/restaurant/:ID'
          component={(props) => {
            return <RestaurantPage {...props}></RestaurantPage>;
          }}
          exact strict
        />
        <Route
          path='/activity/:ID'
          component={(props) => {
            return <ActivityPage {...props}></ActivityPage>;
          }}
          exact strict
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
