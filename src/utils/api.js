import axios from 'axios';

const APPID = '1b4a4b39a41d6d3d01a310d889f3f12e';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export default {
  getForecast: query => (
    axios.get(`${BASE_URL}/forecast?APPID=${APPID}&q=${query}&units=metric`)
      .then(({ data }) => ({ data, error: null }))
      .catch(({ message }) => ({ data: null, error: message }))
  ),
};
