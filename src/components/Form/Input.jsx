import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 600;
`;

const InputField = styled.input`
  padding: 15px 0px;  
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder{
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  pointer-events: none;  /* Prevent icon from capturing pointer events */
`;

const Input = ({ label, icon, ...props }) => {
  let selectedIcon;

  switch (icon) {
    case 'email':
      selectedIcon = faEnvelope;
      break;
    case 'password':
      selectedIcon = faLock;
      break;
    default:
      selectedIcon = null;
  }

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputField {...props} />
      {selectedIcon && <Icon icon={selectedIcon} />}
    </InputWrapper>
  );
};

Input.propTypes = {
  label: P.string.isRequired,
  icon: P.string.isRequired,
};

export default Input;