import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Immunization from '../Immunization';

const type = "Influenza, seasonal, injectable, preservative free";
const date = "2015-02-25T00:00:00-06:00";

test('Should render list with list items "type" and "date" text displayed', () => {

  const specimen = render(
    <Immunization
      type={ type }
      date={ date }
    />
  );
  expect(specimen.getByRole('list')).toBeInTheDocument();
  expect(specimen.getAllByRole('listitem').length).toBe(2);
  expect(specimen.getByText(type)).toBeInTheDocument();
  expect(specimen.getByText(date)).toBeInTheDocument();
});
