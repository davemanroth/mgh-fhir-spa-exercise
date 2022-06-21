import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Patient from './Patient';

const PatientList = ({ patientData }) => {

  const sendPatientId = () => {
  }

  return (
    <div role="group" className="d-grid gap-2">
      { patientData.map( (patient, i) => {
        const { id, gender, birthDate } = patient.resource;
        return (
          <Patient 
            key={ i }
            id={ id }
            gender={ gender }
            birthDate={ birthDate }
            sendPatientId={ sendPatientId }
          />
        );
      })}
    </div>
  );
}

PatientList.propTypes = {
  patientData: PropTypes.array.isRequired
}

export default PatientList;
