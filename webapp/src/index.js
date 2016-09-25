import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Home from './modules/Home';
import {Router, Route, hashHistory} from 'react-router';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
  </Router>
), document.getElementById('app'));
