import React from 'react';
import PropTypes from 'prop-types';

const Observation = ({ type, date, }) => {

  return (
    <ul>
      <li><strong>Date: </strong>{ date }</li>
      <li><strong>Type: </strong>{ type }</li>
    </ul>
  );
}

Observation.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Observation;
