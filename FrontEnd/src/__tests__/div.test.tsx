import { render } from '@testing-library/react';
import CustomDiv from '../component/Div/div.tsx'; // Assuming CustomDiv is in the same directory
import 'jest-styled-components';

describe('CustomDiv', () => {
  it('renders with correct styles', () => {
    const { container } = render(<CustomDiv bordertop="1px solid black" />);
    expect(container.firstChild).toHaveStyleRule('border-top', '1px solid black');
    expect(container.firstChild).toHaveStyleRule('border-top: 1px solid red');
    expect(container.firstChild).toHaveStyleRule('background-color: blue');
    expect(container.firstChild).toHaveStyleRule('padding: 10px');
    expect(container.firstChild).toHaveStyleRule('display: flex');
  });
});
