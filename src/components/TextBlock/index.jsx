import P from 'prop-types';
import styled from 'styled-components';
import Heading from '../Heading/Heading';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 50%, 600px);
  color: ${({ theme }) => theme.colors.secondary}
`;

const Paragraph = styled.p`
  margin-top: 16px;
  line-height: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.large};
`;

const Subtitle = styled(Heading)`
  margin-top: 8px;
`;


export const TextBlock = ({ children, title, subtitle }) => {
  return (
    <TextContainer>
      <Heading>{title}</Heading>
      <Subtitle as="h3">{subtitle}</Subtitle>
      <Paragraph>{children}</Paragraph>
    </TextContainer>
  );
};

TextBlock.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
};