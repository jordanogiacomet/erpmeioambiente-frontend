import React from 'react';
import P from 'prop-types';
import { TextContainer } from './styles/TextContainer';

export const TextBlockRoot = ({ children, backgroundColor, ...props }) => {
  return (
    <TextContainer backgroundColor={backgroundColor} {...props}>
      {children}
    </TextContainer>
  );
};

TextBlockRoot.propTypes = {
  children: P.node.isRequired,
  backgroundColor: P.string,
};
