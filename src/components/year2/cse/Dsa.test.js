import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dsa from '../../../../components/year2/cse/Dsa';

describe('Dsa (Data Structures & Algorithms) Component', () => {
  test('renders Dsa course content', () => {
    render(
      <BrowserRouter>
        <Dsa />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });
});