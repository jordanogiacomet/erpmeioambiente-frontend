import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const Input = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputField {...props}/>
  </InputWrapper>
);

Input.propTypes = {
  label: P.string.isRequired,
};

export default Input;