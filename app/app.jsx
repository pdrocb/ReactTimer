var React = require('react');
var ReactDOM = require('react-dom');
//This will give you new URL that people will be able to visit.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');


//Load foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/Countdown" component={Countdown} />
        <IndexRoute component={Timer} />
      </Route>
    </Router>,
    document.getElementById('app')
);
