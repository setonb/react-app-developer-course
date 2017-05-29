var axios = require('axios');
var cityJson = require('./city.list.json');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bfe39ceb2a2ed375d078889bf6319215&units=imperial';

// API KEY
// bfe39ceb2a2ed375d078889bf6319215

module.exports = {
  getTemp: function(location) {
    var locationName = (location.indexOf(',') !== -1) ? location.split(',')[0] : location;
    var locationId = cityJson.find(function(object){
      return object["name"].toLowerCase() === location.toLowerCase();
    });
    var encodedLocation = (locationId) ? encodeURIComponent(locationId.id) : '';
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&id=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return {
          temp: response.data.main.temp,
          weather: response.data.weather[0].description
        };
      }
    }, function(response) {
      throw new Error(response.data.message);
    });
  }
}
