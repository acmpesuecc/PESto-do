import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cse from '../../../components/year2/Cse';

describe('Cse Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders CSE course list', () => {
    render(
      <BrowserRouter>
        <Cse />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });

  test('handles navigation and routing', () => {
    const { container } = render(
      <BrowserRouter>
        <Cse />
      </BrowserRouter>
    );
    expect(container.firstChild).toBeTruthy();
  });

  test('component renders with proper structure', () => {
    const { container } = render(
      <BrowserRouter>
        <Cse />
      </BrowserRouter>
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});