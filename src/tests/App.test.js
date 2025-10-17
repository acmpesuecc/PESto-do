import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('renders main application structure', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Check if at least one element is rendered
    expect(document.querySelector('#root')).toBeTruthy();
  });
});