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
  const button = patient.getByRole('button');
  expect(button).toBeInTheDocument();
  const genderRegex = new RegExp(gender, "");
  const birthDateRegex = new RegExp(birthDate, "");
  expect(screen.getByText(genderRegex)).toBeInTheDocument();
  expect(screen.getByText(birthDateRegex)).toBeInTheDocument();
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

