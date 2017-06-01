var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main');
var Timer = require('./components/Timer');
var Countdown = require('./components/Countdown');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css'); // css! is needed before the files because they are not "modules"
$(document).foundation();

// Require Styles
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
