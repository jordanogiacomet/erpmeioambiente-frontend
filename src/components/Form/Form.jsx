import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  & > *:not(:last-child) {
    margin-bottom: 16px;
  };
`;

const Form = ({ children, ...props }) => (
  <FormWrapper {...props}>{children}</FormWrapper>
);

Form.propTypes = {
  children: P.node.isRequired,
};

export default Form;