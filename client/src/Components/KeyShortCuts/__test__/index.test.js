import React from 'react';
import KeyShortCuts from '..';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('is shortCut comp opening and closing', () => {
  const { getByTestId } = render(<KeyShortCuts />);
  const detailsEl = getByTestId('details');
  expect(detailsEl.hasAttribute('open')).toBe(false);
});
