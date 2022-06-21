import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Patient from './Patient';

const PatientList = ({ patientData, getImmunizations }) => {

  return (
    <div role="group" className="d-grid gap-2 patient-list">
      { patientData.map( (patient, i) => {
        const { id, gender, birthDate } = patient.resource;
        return (
          <Patient 
            key={ i }
            id={ id }
            gender={ gender }
            birthDate={ birthDate }
            getImmunizations={ getImmunizations }
          />
        );
      })}
    </div>
  );
}

PatientList.propTypes = {
  patientData: PropTypes.array.isRequired,
  getImmunizations: PropTypes.func.isRequired
}

export default PatientList;
