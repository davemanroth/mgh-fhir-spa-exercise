import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

/**
 * Renders a button with text that shows a patient's gender
 * and birth date. The getImmunizations click handler changes
 * the button color and passes the patient's id to the
 * parent compoent.
 */
const Patient = ({ 
  id, 
  gender, 
  birthDate, 
  getImmunizations 
}) => {
  const [variant, setVariant] = useState("info");

  const handleClick = (e) => {
    setVariant('warning');
    getImmunizations(id);
  }

  return (
    <Button size="sm" variant={ variant } onClick={ handleClick }>
      <p><strong>Gender: </strong>{ gender }<br />
      <strong>Birth date: </strong>{ birthDate }</p>
    </Button>
  );
}

Patient.propTypes = {
  /* Patient's id */
  id: PropTypes.string.isRequired,
  /* Patient's gender */
  gender: PropTypes.string.isRequired,
  /* Patient's birth date */
  birthDate: PropTypes.string.isRequired,
  /** 
   * click handler that changes button color and
   * passes patient ID to parent component 
   */
  getImmunizations: PropTypes.func.isRequired
}

export default Patient;
