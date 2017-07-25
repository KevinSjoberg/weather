import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastEntry.css';

import icon01d from '../../assets/icons/01d.svg';
import icon01n from '../../assets/icons/01n.svg';
import icon02d from '../../assets/icons/02d.svg';
import icon02n from '../../assets/icons/02n.svg';
import icon03d from '../../assets/icons/03d.svg';
import icon03n from '../../assets/icons/03n.svg';
import icon04d from '../../assets/icons/04d.svg';
import icon04n from '../../assets/icons/04n.svg';
import icon09d from '../../assets/icons/09d.svg';
import icon09n from '../../assets/icons/09n.svg';
import icon10d from '../../assets/icons/10d.svg';
import icon10n from '../../assets/icons/10n.svg';
import icon11d from '../../assets/icons/11d.svg';
import icon11n from '../../assets/icons/11n.svg';
import icon13d from '../../assets/icons/13d.svg';
import icon13n from '../../assets/icons/13n.svg';
import icon50d from '../../assets/icons/50d.svg';
import icon50n from '../../assets/icons/50n.svg';

const icons = {
  '01d': icon01d,
  '01n': icon01n,
  '02d': icon02d,
  '02n': icon02n,
  '03d': icon03d,
  '03n': icon03n,
  '04d': icon04d,
  '04n': icon04n,
  '09d': icon09d,
  '09n': icon09n,
  '10d': icon10d,
  '10n': icon10n,
  '11d': icon11d,
  '11n': icon11n,
  '13d': icon13d,
  '13n': icon13n,
  '50d': icon50d,
  '50n': icon50n,
};

const ForecastEntry = (props) => {
  const { weather: [{ description, icon }], dt_txt: timestamp } = props.info;

  return (
    <div className={styles.item}>
      <img src={icons[icon]} alt={description} />
      <p>{timestamp}</p>
    </div>
  );
};

ForecastEntry.propTypes = {
  info: PropTypes.shape({
    weather: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })).isRequired,
    dt_txt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastEntry;
