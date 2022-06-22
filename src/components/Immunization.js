import React from 'react';
import PropTypes from 'prop-types';

/** Renders a list of immunization type and date **/
const Immunization = ({ type, date, }) => {
  return (
    <ul>
      <li><strong>Date: </strong>{ date }</li>
      <li><strong>Type: </strong>{ type }</li>
    </ul>
  );
}

Immunization.propTypes = {
  /* The type of immunization */
  type: PropTypes.string.isRequired,
  /* The date of immunization */
  date: PropTypes.string.isRequired,
}

export default Immunization;
