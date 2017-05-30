var React = require('react');

var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var ErrorModal = require('./ErrorModal');
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
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(responseObject){
      that.setState({
        isLoading: false,
        location: location,
        temp: responseObject.temp,
        description: responseObject.weather
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var {isLoading, location, temp, description, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} description={description}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === "string") {
        return <ErrorModal message={errorMessage}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Weather App</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
