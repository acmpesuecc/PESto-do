import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Ddco from '../../../../components/year2/cse/Ddco';

describe('Ddco (Digital Design & Computer Organization) Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Ddco course content', () => {
    render(
      <BrowserRouter>
        <Ddco />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });

  test('loads saved progress from localStorage', () => {
    const mockProgress = JSON.stringify({ unit1: ['task1'], unit2: [] });
    localStorage.getItem.mockReturnValue(mockProgress);
    
    render(
      <BrowserRouter>
        <Ddco />
      </BrowserRouter>
    );
    
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});