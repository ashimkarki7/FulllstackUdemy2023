import styled from 'styled-components';
import { cssProps } from '../../model/model.ts';

const CustomDiv = styled.div<cssProps>`
  ${props => props.bordertop && `border-top: ${props.bordertop};`}

  ${props => props.flexwrap && `flex-wrap: ${props.flexwrap};`}

  ${props => props.backgroundcolor && `background-color: ${props.backgroundcolor};`}

  ${props => props.zindex && `z-index: ${props.zindex};`}
  ${props => props.boxshadow && `box-shadow: ${props.boxshadow};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.position && `position: ${props.position};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.display && `display: ${props.display};`}
  ${props => props.alignitems && `align-items: ${props.alignitems};`}
  ${props => props.flexdirection && `flex-direction: ${props.flexdirection};`}
  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.justifycontent && `justify-content: ${props.justifycontent};`}
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.textalign && `text-align: ${props.textalign};`}
  ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props => props.lineheight && `line-height: ${props.lineheight};`}
  ${props => props.marginleft && `margin-left: ${props.marginleft};`}
  ${props => props.marginbottom && `margin-bottom: ${props.marginbottom};`}
  ${props => props.flexgrow && `flex-grow: ${props.flexgrow};`}
`;


export default CustomDiv;
