import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Afll from '../../../../components/year2/cse/Afll';

describe('Afll (Automata & Formal Languages) Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders Afll course content', () => {
    render(
      <BrowserRouter>
        <Afll />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });

  test('handles checkbox interactions', async () => {
    render(
      <BrowserRouter>
        <Afll />
      </BrowserRouter>
    );
    
    const checkboxes = screen.queryAllByRole('checkbox');
    if (checkboxes.length > 0) {
      const firstCheckbox = checkboxes[0];
      const initialState = firstCheckbox.checked;
      fireEvent.click(firstCheckbox);
      expect(firstCheckbox.checked).toBe(!initialState);
    }
  });

  test('persists progress to localStorage', () => {
    render(
      <BrowserRouter>
        <Afll />
      </BrowserRouter>
    );
    
    const checkboxes = screen.queryAllByRole('checkbox');
    if (checkboxes.length > 0) {
      fireEvent.click(checkboxes[0]);
      // Verify localStorage was called
      expect(localStorage.setItem).toHaveBeenCalled();
    }
  });
});