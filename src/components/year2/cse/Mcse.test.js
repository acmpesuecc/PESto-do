import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Mcse from '../../../../components/year2/cse/Mcse';

describe('Mcse (Microcontroller & Embedded Systems) Component', () => {
  test('renders Mcse course content', () => {
    render(
      <BrowserRouter>
        <Mcse />
      </BrowserRouter>
    );
    expect(document.body).toBeInTheDocument();
  });
});