import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Content from './components/Content';
import Home from './components/Home';
import Error from './components/widget/AlertInfo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/content" component={Content}/>
            <Route path="/error" component={Error}/>
        </Route>
    </Router>
), document.getElementById('app'));

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
