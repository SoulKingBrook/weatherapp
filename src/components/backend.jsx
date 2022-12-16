import axios from "axios";
const getData=async (location) =>{
    const options = {
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/forecast',
      params: {lat: location.latitude, lon: location.longitude,appid:'7e929cd554058036fe2d7c765d057bcd',units:'metric'},
    };
    
    return await axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
  }
export default getData;