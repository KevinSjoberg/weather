import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/forecast/${this.state.location}`);
  }

  render() {
    return (
      <form className="weather-form" onSubmit={this.handleSubmit}>
        <h1>Enter a location</h1>
        <input
          onChange={e => this.setState({ location: e.target.value })}
          type="text"
          value={this.state.location}
        />
        <button type="submit">Check Weather</button>
      </form>
    );
  }
}

Form.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form;
