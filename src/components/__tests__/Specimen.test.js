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
      setPatient={ jest.fn() }
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
      setPatient={ jest.fn() }
    />
  );
  const specButton = screen.getByRole('button');
  expect(specButton).toHaveClass('btn-info');
  userEvent.click(specButton);
  expect(specButton).toHaveClass('btn-warning');
});



