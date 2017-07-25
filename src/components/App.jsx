import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Forecast from './Forecast';
import Form from './Form';

import styles from './App.css';

export default () => (
  <Router>
    <div className={styles.App}>
      <Route exact path="/" component={Form} />
      <Route path="/forecast/:location" component={Forecast} />
    </div>
  </Router>
);
