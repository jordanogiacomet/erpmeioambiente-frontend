import React from 'react';
import P from 'prop-types';
import { Label } from './styles/Label';

export const InputLabel = ({ htmlFor, text }) => {
  return <Label htmlFor={htmlFor}>{text}</Label>;
};

InputLabel.propTypes = {
  htmlFor: P.string.isRequired,
  text: P.string.isRequired,
};
