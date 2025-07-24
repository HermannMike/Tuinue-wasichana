import React from 'react';
import { render, screen } from '@testing-library/react';
import CharityList from './CharityList';

test('renders charity list', () => {
  render(<CharityList />);
  const headingElement = screen.getByText(/Charity List/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders all charities', () => {
    render(<CharityList />);
    const charityAElements = screen.getAllByText(/Charity A/i);
    expect(charityAElements.length).toBeGreaterThan(0);
  
    const charityBElements = screen.getAllByText(/Charity B/i);
    expect(charityBElements.length).toBeGreaterThan(0);
  
    const charityCElements = screen.getAllByText(/Charity C/i);
    expect(charityCElements.length).toBeGreaterThan(0);
  });