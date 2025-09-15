import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react'; 

import App from './App.jsx';

describe('App', () => {
  it('should render the heading', () => {
    render(<App />);
    expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
  });
});

// vitest is used (like Jest but faster, works well with Vite).

// describe groups related tests.

// it defines a single test case.

// expect is your assertion function.
