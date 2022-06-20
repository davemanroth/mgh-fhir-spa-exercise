import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Patient from './Patient';

const PatientList = ({ patientData }) => {

  const sendPatientId = () => {
  }

  return (
    <ButtonGroup vertical>
      { patientData.map( (patient, i) => {
        const { type, collection, subject } = patient;
        return (
          <Patient 
            key={ i }
            id={ type.coding[0].display }
            patient={ subject.reference }
            collectedDateTime={ collection.collectedDateTime }
            sendPatientId={ sendPatientId }
          />
        );
      })}
    </ButtonGroup>
  );
}

PatientList.propTypes = {
  observationData: PropTypes.array.isRequired
}

export default PatientList;
