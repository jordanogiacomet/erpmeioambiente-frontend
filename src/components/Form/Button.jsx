import P from 'prop-types';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
    width: 100%;
    padding: 15px 0px; 
    background-color: ${({ theme }) => theme.colors.secondary};
    border: transparent;
    border-radius: 10px;
    font-size: ${({theme}) => theme.font.sizes.large};
    font-weight: 700;
    cursor: pointer;
`;


export const Button = ({ text, ...props }) => {
  return (
    <ButtonWrapper aria-label={text} {...props}>{text}</ButtonWrapper>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
};

export default Button;