import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const InputField = styled.input`
  padding: 10px 15px;  // Ajuste o padding para um estilo mais confortável
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 25px;  // Arredondamento para os cantos do input
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.focus};
  }
`;

const Input = ({ label, ...props }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <InputField {...props} />
  </InputWrapper>
);

Input.propTypes = {
  label: P.string
};

export default Input;