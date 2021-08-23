import React from 'react';
import { render, screen } from '@testing-library/react';
import { WhatsApp } from '../src';

it('component has the correct link', () => {
  render(<WhatsApp phone="11-91919119" text="test" />);

  expect(screen.getByRole('link', { name: 'whatsapp' })).toHaveAttribute(
    'href',
    'https://api.whatsapp.com/send?phone=1191919119&text=test'
  );
});
