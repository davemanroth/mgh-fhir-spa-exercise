import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PatientList from './PatientList';
import fhirApiQueryer from '../services/fhir-api-queryer';
import './App.css';

const App = () => {
  const queryer = fhirApiQueryer();

  const [patientData, setPatientData] = useState([]);

  useEffect( () => {
    if (Object.keys(patientData).length === 0) {
      queryer.getBundle('Patient')
        .then( (result) => {
          const { entry } = result;
          setPatientData(entry);
        })
        .catch( (e) => {
          console.error(e);
        });
    }
  });

  return (
    <Container>
      <Row>
        <Col md="4">
          <PatientList patientData={ patientData } />
        </Col>
        <Col md="8">
        </Col>
      </Row>
    </Container>
  );
}

export default App;
