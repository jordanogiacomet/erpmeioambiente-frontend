import P from 'prop-types';
import styled from 'styled-components';

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
`;

const Button = ({ text, backgroundColor, color, fontSize, hoverBackgroundColor, disabled, ...props }) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      hoverBackgroundColor={hoverBackgroundColor}
      disabled={disabled}
      aria-label={text}
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
};



export default Button;
