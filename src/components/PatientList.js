import React from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient';

/**
 * Renders an array of buttons based on patientData array prop. Also
 * passes getImmunizations click handler up the chain to parent
 * component
 */
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
  /* An array of patient data */
  patientData: PropTypes.array.isRequired,
  /* Click handler from Patient component passed to parent */
  getImmunizations: PropTypes.func.isRequired
}

export default PatientList;
