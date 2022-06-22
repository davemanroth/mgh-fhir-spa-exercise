import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PatientList from './PatientList';
import ImmunizationList from './ImmunizationList';
import fhirApiQueryer from '../services/fhir-api-queryer';
import './App.css';

/**
 * Main implemntation of application
 */
const App = () => {
  const [patientData, setPatientData] = useState([]);
  const [immunizationData, setImmunizationData] = useState(false);

  const queryer = fhirApiQueryer();
  const placeholderText = "Click a button on the left to view patient immunization information"; 

  const getImmunizations = async (id) => {
    const rawData = await queryer.getImmunizations(id);
    const immunizations = Object.hasOwn(rawData, "entry") ? rawData.entry : [];
    setImmunizationData(immunizations);
  }

  useEffect( () => {
// Load patient data using queryer module on initial app load
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
      <header className="mb-5 pt-3 text-center">
        <h1>FHIR Patient Immunization Queryer</h1>
      </header>
          <Row className="justify-content-md-center">
            <Col md="2">
              <h5>Patient list</h5>
              <PatientList 
                patientData={ patientData } 
                getImmunizations={ getImmunizations }
              />
            </Col>
            <Col md="6">
              <div className="position-sticky immunization-data">
                <h5>Immunization data</h5>
                <Card>
                  <Card.Body>
                    { !immunizationData ? placeholderText :
                      <ImmunizationList
                        immunizationData={ immunizationData }
                      />
                    }
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
      <footer className="mt-5" />
    </Container>
  );
}

export default App;
