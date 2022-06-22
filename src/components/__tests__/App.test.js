import { render, screen } from '@testing-library/react';
import App from '../App';
import mockPatientBundle from '../../__mocks__/patient_bundle';

beforeEach( () => {
  fetch.resetMocks();
});

test('Should render app title', async () => {
  // Start by mocking inital load of patient data
  fetch.mockResponse(JSON.stringify(mockPatientBundle));
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(await screen.findByText(/fhir patient immunization queryer/i)).toBeInTheDocument();
});

test('Should render titles to patient and immunization areas', async () => {
  fetch.mockResponse(JSON.stringify(mockPatientBundle));
  render(<App />);
  const headings = await screen.findAllByRole('heading', { level: 5 });
  expect(await screen.findByText(/patient list/i)).toBeInTheDocument();
  expect(await screen.findByText(/immunization data/i)).toBeInTheDocument();
});
