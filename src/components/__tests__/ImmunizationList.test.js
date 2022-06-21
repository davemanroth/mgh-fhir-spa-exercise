import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import ImmunizationList from '../ImmunizationList';
import mockImmunizationBundle from '../../__mocks__/immunization_bundle'

const immunizationData = mockImmunizationBundle.entry.slice(0,3);

test('Should render a list of at least one Immunization components', () => {
  const patientList = render(
    <ImmunizationList
      immunizationData={ immunizationData }
    />
  );
  expect(patientList.getAllByRole('list').length).toBeGreaterThan(0);
});
