import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Patient = ({ 
  id, 
  gender, 
  birthDate, 
  sendPatientId 
}) => {
  const [variant, setVariant] = useState("info");

  const handleClick = (e) => {
    setVariant('warning');
    sendPatientId(id);
  }

  return (
    <Button variant={ variant } onClick={ handleClick }>
      <p>{ gender }</p>
      <p>{ birthDate }</p>
    </Button>
  );
}

Patient.propTypes = {
  id: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  sendPatientId: PropTypes.func.isRequired
}

export default Patient;
