import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Specimen from '../Specimen';

const collectedDateTime = "2015-02-25T00:00:00-06:00";

test('Should render a button with "type" and "dateTime" text displayed', () => {

  const specimen = render(
    <Specimen
      type="searchset"
      patient="Patient/1194"
      collectedDateTime={ collectedDateTime }
      sendPatientId={ jest.fn() }
    />
  );
  expect(specimen.getByRole('button')).toBeInTheDocument();
  expect(specimen.getByText('searchset')).toBeInTheDocument();
  expect(specimen.getByText(collectedDateTime)).toBeInTheDocument();
});

test('Should change button class from "btn-info" to "btn-warning" when clicked', () => {
  const specimen = render(
    <Specimen
      type="searchset"
      patient="Patient/1194"
      collectedDateTime={ collectedDateTime }
      sendPatientId={ jest.fn() }
    />
  );
  const specButton = screen.getByRole('button');
  expect(specButton).toHaveClass('btn-info');
  userEvent.click(specButton);
  expect(specButton).toHaveClass('btn-warning');
});


test('Should call sendPatientId prop function when clicked with patient id arg', () => {
  const patientId= "Patient/1194";
  const sendPatientId = jest.fn(arg => arg); 
  const specimen = render(
    <Specimen
      type="searchset"
      patient={ patientId }
      collectedDateTime={ collectedDateTime }
      sendPatientId={ sendPatientId }
    />
  );
  const specButton = screen.getByRole('button');
  userEvent.click(specButton);
  expect(sendPatientId).toHaveBeenCalled();
  expect(sendPatientId).toHaveBeenCalledWith(patientId);
  expect(sendPatientId.mock.results[0].value).toBe(patientId);
});

