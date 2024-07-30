import React from 'react';
import P from 'prop-types';
import { Label } from './styles/Label';

export const InputLabel = ({ htmlFor, text, ...props }) => {
  return <Label htmlFor={htmlFor} {...props}>{text}</Label>;
};

InputLabel.propTypes = {
  htmlFor: P.string.isRequired,
  text: P.string.isRequired,
};
