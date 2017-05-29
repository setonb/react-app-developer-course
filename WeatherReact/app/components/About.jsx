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
    <h3>About App</h3>
  );
}

module.exports = About;
