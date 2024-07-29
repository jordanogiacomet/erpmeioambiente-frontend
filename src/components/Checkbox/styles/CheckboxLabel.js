import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 600;
`;