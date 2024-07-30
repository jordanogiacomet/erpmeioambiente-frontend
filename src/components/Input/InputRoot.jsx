import React from 'react';
import P from 'prop-types';
import { InputWrapper } from './styles/InputWrapper';

export const InputRoot = ({ children, ...props }) => {
  return <InputWrapper {...props}>{children}</InputWrapper>;
};

InputRoot.propTypes = {
  children: P.node.isRequired,
};
