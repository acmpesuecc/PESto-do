import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Wt from '../../../../components/year2/cse/Wt';

describe('Wt (Web Technologies) Component', () => {
  test('renders Wt course content', () => {
    render(
      <BrowserRouter>
        <Wt />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });
});