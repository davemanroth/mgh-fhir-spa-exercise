import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Specimen = ({ 
  type, 
  collectedDateTime, 
  patient, 
  setPatient 
}) => {
  const [variant, setVariant] = useState("info");

  const handleClick = (e) => {
    setVariant('warning');
  }

  return (
    <Button variant={ variant } onClick={ handleClick }>
      <p>{ type }</p>
      <p>{ collectedDateTime }</p>
    </Button>
  );
}

Specimen.propTypes = {
  type: PropTypes.string.isRequired,
  collectedDateTime: PropTypes.string.isRequired,
  patient: PropTypes.string.isRequired,
  setPatient: PropTypes.func.isRequired
}

export default Specimen;
