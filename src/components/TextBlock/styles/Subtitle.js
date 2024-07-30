import styled from 'styled-components';
import { Heading } from '../../Heading/Heading';

export const Subtitle = styled(Heading)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.font.sizes.huge};
`;