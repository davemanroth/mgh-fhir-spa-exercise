import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import SpecimenList from '../SpecimenList';
import mockObservationBundle from '../../__mocks__/observation_bundle'


test('Should render a group of at least one Specimen components', () => {
  const specimenList = render(
    <SpecimenList
      specimenData={ mockObservationBundle }
    />
  );
  const group = screen.getByRole('group');
  expect(group).toBeInTheDocument();
  const buttons = within(group).getAllByRole('button');
  expect(buttons.length).toBeGreaterThan(0);
});
