import React from 'react';
import PropTypes from 'prop-types';
import Immunization from './Immunization';

const ImmunizationList = ({ immunizationData }) => {
  return (
    <>
      { immunizationData.length > 0 ? immunizationData.map( (entry, i) => {
        const { vaccineCode, occurrenceDateTime: date } = entry.resource;
        return (
          <Immunization 
            key={ i }
            type={ vaccineCode.text }
            date={ date }
          />
        );
      })
      : "No immunization data available for this patient"
      }

    </>
  );
}

ImmunizationList.propTypes = {
  immunizationData: PropTypes.array.isRequired
}

export default ImmunizationList;
