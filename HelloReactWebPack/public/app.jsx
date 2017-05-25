var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('./components/Greeter');

var firstName = "Seton"

ReactDOM.render(
  <Greeter name={firstName} message="This is from the element!"/>,
  document.getElementById('app')
);
