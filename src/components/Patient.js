import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

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
  id: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  getImmunizations: PropTypes.func.isRequired
}

export default Patient;
