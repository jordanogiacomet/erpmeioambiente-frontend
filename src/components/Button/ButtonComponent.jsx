import React from 'react';
import P from 'prop-types';
import { ButtonWrapper } from './styles/ButtonWrapper';

export const ButtonComponent = ({ text, backgroundColor, color, fontSize, hoverBackgroundColor, disabled, type, variant, ...props }) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      hoverBackgroundColor={hoverBackgroundColor}
      disabled={disabled}
      aria-label={text}
      type={type}
      $variant={variant}
      {...props}
    >
      {text}
    </ButtonWrapper>
  );
};

ButtonComponent.propTypes = {
  text: P.string.isRequired,
  backgroundColor: P.string,
  color: P.string,
  fontSize: P.string,
  hoverBackgroundColor: P.string,
  disabled: P.bool,
  type: P.string,
  variant: P.string,
};
