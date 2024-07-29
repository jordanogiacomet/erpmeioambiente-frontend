import styled from 'styled-components';

export const InputField = styled.input`
  padding: 15px 0px;  
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder{
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
