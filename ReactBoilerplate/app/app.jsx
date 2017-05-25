var React = require('react');
var ReactDOM = require('react-dom');


var objectOne = {
  name: 'Seton',
  location: 'New York'
}

var objectTwo = {
  age: 34,
  ...objectOne
}

console.log(objectTwo);

ReactDOM.render(
  <h1>Boilerplate App!</h1>,
  document.getElementById('app')
);
