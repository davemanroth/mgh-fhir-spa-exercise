import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Observation from '../Observation';

const date = "2015-02-25T00:00:00-06:00";

test('Should render list with list items "type" and "date" text displayed', () => {

  const specimen = render(
    <Observation
      type="Calcium"
      date={ date }
    />
  );
  expect(specimen.getByRole('list')).toBeInTheDocument();
  expect(specimen.getAllByRole('listitem').length).toBe(2);
  expect(specimen.getByText("Calcium")).toBeInTheDocument();
  expect(specimen.getByText(date)).toBeInTheDocument();
});
