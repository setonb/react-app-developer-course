var React = require('react');
var {Link} = require('react-router');

// Stateles Functional Component

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples!</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to="?location=New%20York,OH">New York, NY</Link></li>
        <li><Link to="?location=Springfield,OH">Springfield, OH</Link></li>
      </ol>
    </div>
  );
};

module.exports = Examples;
