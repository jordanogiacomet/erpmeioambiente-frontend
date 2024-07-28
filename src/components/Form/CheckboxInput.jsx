import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 600;
`;

const CheckboxField = styled.input`
  width: auto;
  cursor: pointer;
`;

const CheckboxInput = ({ label, id, ...props }) => (
  <CheckboxWrapper>
    <CheckboxField type="checkbox" id={id} {...props} />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
  </CheckboxWrapper>
);

CheckboxInput.propTypes = {
  label: P.string.isRequired,
  id: P.string.isRequired,
};

export default CheckboxInput;
