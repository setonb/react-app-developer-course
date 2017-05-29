var React = require('react');

var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function(responseObject){
      that.setState({
        isLoading: false,
        location: location,
        temp: responseObject.temp,
        description: responseObject.weather
      })
    }, function(errorMessage) {
      that.setState({
        isLoading: false
      })
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp, description} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} description={description}/>;
      }
    }

    return (
      <div>
        <h3>Weather App</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
