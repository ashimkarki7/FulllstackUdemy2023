import { render } from '@testing-library/react';
import CustomParagraph from '../component/Paragraph/paragraph.tsx'; // Assuming CustomDiv is in the same directory
import 'jest-styled-components';

describe('CustomParagraph', () => {
  it('renders with correct styles', () => {
    const { container } = render(<CustomParagraph padding=" 10px" />);
    expect(container.firstChild).toHaveStyleRule('padding: 10px');
    expect(container.firstChild).toHaveStyleRule('display: flex');
  });
});
