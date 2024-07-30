import P from 'prop-types';
import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const Title = styled.h1`
  ${({ theme, $uppercase, $colorDark, size }) => css`
    color: ${($colorDark) ? theme.colors.primary : theme.colors.secondary};
    margin-bottom: 15px;
    ${titleSize[size](theme)};
    ${titleCase($uppercase)};
  `};
`;

export const Heading = ({ children, as = 'h1', size = 'big', uppercase = false, colorDark = false }) => {
  return (
    <Title as={as} $colorDark={colorDark} size={size} $uppercase={uppercase}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big']),
  uppercase: P.bool,
  colorDark: P.bool,
};


