import styled from 'styled-components';
import { cssProps } from '../../model/model.ts';
import React, { memo } from 'react';

interface InputProps {
  value?: number | undefined;
  locationIndex?: number | undefined;
  placeholder?: string;
  type?: string;
  step?: string;
  customStyle?: cssProps;
}

const CustomInputStyled = styled.input<InputProps>`
  width: 147px;
  height: 33px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #2b4877;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 9px;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CustomInput: React.FC<InputProps> = memo(({ locationIndex, value, placeholder, type = 'number', step }) => {
  return (
    <CustomInputStyled key={locationIndex} value={value} placeholder={placeholder} type={type} step={step} readOnly />
  );
});

export default CustomInput;
