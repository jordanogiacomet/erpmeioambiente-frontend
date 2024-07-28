import P from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  width: 100%;
  padding: 15px 0px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.colors.secondary};
  color: ${({ theme, color }) => color || theme.colors.white};
  border: none;
  border-radius: 10px;
  font-size: ${({ theme, fontSize }) => fontSize || theme.font.sizes.large};
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, hoverBackgroundColor }) => hoverBackgroundColor || theme.colors.hoverFormButton};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === 'forgot-password' &&
    css`
      width: fit-content;
      padding: 0;
      background-color: transparent;
      text-decoration: underline;
      white-space: nowrap;
      &:hover {
        background-color: transparent;
      }
    `}
`;

const Button = ({ text, backgroundColor, color, fontSize, hoverBackgroundColor, disabled, type, variant, ...props }) => {
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

Button.propTypes = {
  text: P.string.isRequired,
  backgroundColor: P.string,
  color: P.string,
  fontSize: P.string,
  hoverBackgroundColor: P.string,
  disabled: P.bool,
  type: P.string,
  variant: P.string,
};



export default Button;
