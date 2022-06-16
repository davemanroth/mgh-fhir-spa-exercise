import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Specimen from './Specimen';

const SpecimenList = ({ specimenData }) => {

  const sendPatientId = () => {
  }

  return (
    <ButtonGroup vertical>
      { specimenData.map( (specimen, i) => {
        const { type, collection, subject } = specimen;
        return (
          <Specimen 
            key={ i }
            type={ type.coding[0].display }
            patient={ subject.reference }
            collectedDateTime={ collection.collectedDateTime }
            sendPatientId={ sendPatientId }
          />
        );
      })}
    </ButtonGroup>
  );
}

SpecimenList.propTypes = {
  specimenData: PropTypes.array.isRequired
}

export default SpecimenList;
