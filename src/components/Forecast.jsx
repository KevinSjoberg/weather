import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import ForecastEntry from './ForecastEntry';
import WeatherAPI from '../utils/api';

import styles from './Forecast.css';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {},
      list: [],
      error: null,
    };
  }

  componentDidMount() {
    const { match: { params: { location } } } = this.props;
    WeatherAPI.getForecast(location).then(({ data: { city, list }, error }) => (
      this.setState(() => ({ city, list, error }))
    ));
  }

  render() {
    const { city, list } = this.state;

    return (
      <div className="forecast">
        {(isEmpty(city) || isEmpty(list)) ? (
          <p>Loading</p>
        ) : (
          <div>
            <h1>{city.name}, {city.country}</h1>
            <div className={styles.grid}>
              {list.map(entry => (
                <ForecastEntry info={entry} key={entry.dt} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Forecast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      location: PropTypes.string,
    }),
  }).isRequired,
};

export default Forecast;
