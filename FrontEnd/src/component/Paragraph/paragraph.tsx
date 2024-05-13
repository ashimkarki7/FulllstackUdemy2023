import styled from 'styled-components';
import { cssProps } from '../../model/model.ts';

const CustomParagraph = styled.p<cssProps>`
  color: ${props => props.color || '#4D4C4C'};
  font-size: ${props => props.fontSize || '1rem'};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineheight};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textalign};
`;

export default CustomParagraph;
