import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 50%, 600px);
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary}
`;