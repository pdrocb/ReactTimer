var React = require('react');
var ReactDOM = require('react-dom');
//This will give you new URL that people will be able to visit.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        
      </Route>
    </Router>,
    document.getElementById('app')
);
