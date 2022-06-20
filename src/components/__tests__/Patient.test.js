import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Patient from '../Patient';
import mockPatientData from '../../__mocks__/patient_resource';

const { id, gender, birthDate } = mockPatientData;

test('Should render a button with "type" and "dateTime" text displayed', () => {

  const patient = render(
    <Patient
      id={ id }
      gender={ gender }
      birthDate={ birthDate }
      sendPatientId={ jest.fn() }
    />
  );
  expect(patient.getByRole('button')).toBeInTheDocument();
  expect(patient.getByText(gender)).toBeInTheDocument();
  expect(patient.getByText(birthDate)).toBeInTheDocument();
});

test('Should change button class from "btn-info" to "btn-warning" when clicked', () => {
  const patient = render(
    <Patient
      id={ id }
      gender={ gender }
      birthDate={ birthDate }
      sendPatientId={ jest.fn() }
    />
  );
  const patientButton = screen.getByRole('button');
  expect(patientButton).toHaveClass('btn-info');
  userEvent.click(patientButton);
  expect(patientButton).toHaveClass('btn-warning');
});

test('Should call sendPatientId prop function when clicked with patient id arg', () => {
  const sendPatientId = jest.fn(arg => arg); 
  const patient = render(
    <Patient
      id={ id }
      gender={ gender }
      birthDate={ birthDate }
      sendPatientId={ sendPatientId }
    />
  );
  const patientButton = screen.getByRole('button');
  userEvent.click(patientButton);
  expect(sendPatientId).toHaveBeenCalled();
  expect(sendPatientId).toHaveBeenCalledWith(id);
  expect(sendPatientId.mock.results[0].value).toBe(id);
});
/*
*/

