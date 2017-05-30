var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About App</h3>
//     );
//   }
// });

// Stateless Functional Component
// Only works because it only defines the render method and doesn't maintain any state

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About App</h1>
      <p>This is a small app written in React/WebPack.  It uses the API from <a href="http://www.OpenWeatherMap.org" target="_blank">OpenWeatherMap.org</a>.  Please be kind in your use of the API.</p>
    </div>
  );
}

module.exports = About;
