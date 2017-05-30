var React = require('react');

var WeatherMessage = ({temp, location, description}) => { // ES6 Destructuring props inline ( cool! )
  return (
    <h3>It's {temp}&deg; in {location} and {description}.</h3>
  );
};

module.exports = WeatherMessage;
