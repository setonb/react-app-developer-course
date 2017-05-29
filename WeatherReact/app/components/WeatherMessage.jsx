var React = require('react');

var WeatherMessage = ({temp, location, description}) => { // ES6 Destructuring props inline ( cool! )
  return (
    <p>It's {temp}&deg; in {location} and {description}</p>
  );
};

module.exports = WeatherMessage;
