import React from 'react';
import P from 'prop-types';
import { InputField } from './styles/InputField';

export const InputFieldComponent = ({ id, placeholder, type, value, onChange, ...props }) => {
  return (
    <InputField
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

InputFieldComponent.propTypes = {
  id: P.string.isRequired,
  placeholder: P.string,
  type: P.string,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
