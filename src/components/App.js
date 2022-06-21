import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PatientList from './PatientList';
import ImmunizationList from './ImmunizationList';
import fhirApiQueryer from '../services/fhir-api-queryer';
import './App.css';

const App = () => {
  const queryer = fhirApiQueryer();

  const [patientData, setPatientData] = useState([]);
  const [immunizationData, setImmunizationData] = useState([]);

  const getImmunizations = async (id) => {
    const immunizations = await queryer.getImmunizations(id);
    Object.hasOwn(immunizations, "entry") && setImmunizationData(immunizations.entry);
  }

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
      <header className="mb-5">
        <h1>FHIR Patient Immunization Queryer</h1>
      </header>
          <Row className="justify-content-md-center">
            <Col md="2">
              <PatientList 
                patientData={ patientData } 
                getImmunizations={ getImmunizations }
              />
            </Col>
            <Col md="6">
              <Card>
                <Card.Body>
                  <ImmunizationList
                    immunizationData={ immunizationData }
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
      <footer className="mt-5" />
    </Container>
  );
}

export default App;
