import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../app/landingpage';
import TravelPage from '../app/travel';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/home" component={LandingPage}/>
                <Route path="/travel" component={TravelPage}/>
                
            </Switch>
        );
    }
}

export default Router;