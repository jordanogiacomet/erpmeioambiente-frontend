import styled from 'styled-components';

export const Paragraph = styled.p`
  margin-top: 16px;
  line-height: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
`;