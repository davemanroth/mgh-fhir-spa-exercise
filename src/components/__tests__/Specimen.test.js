import React from 'react';
import { render, screen } from '@testing-library/react';
import Specimen from '../Specimen';

test('Should render a button', () => {
  expect(render(<Specimen />).getByRole('button')).toBeInTheDocument();
});
