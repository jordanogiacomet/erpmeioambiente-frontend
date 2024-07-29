import React from 'react';
import P from 'prop-types';
import { InputWrapper } from './styles/InputWrapper';

export const InputRoot = ({ children }) => {
  return <InputWrapper>{children}</InputWrapper>;
};

InputRoot.propTypes = {
  children: P.node.isRequired,
};
