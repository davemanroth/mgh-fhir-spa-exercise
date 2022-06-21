import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PatientList from '../PatientList';
import mockPatientBundle from '../../__mocks__/patient_bundle'

const { entry: patientArr } = mockPatientBundle;

test('Should render a group of at least one Patient components', () => {
  const patientList = render(
    <PatientList
      patientData={ patientArr }
      getImmunizations={ jest.fn() }
    />
  );
  const group = screen.getByRole('group');
  expect(group).toBeInTheDocument();
  const buttons = within(group).getAllByRole('button');
  expect(buttons.length).toBeGreaterThan(0);
});
