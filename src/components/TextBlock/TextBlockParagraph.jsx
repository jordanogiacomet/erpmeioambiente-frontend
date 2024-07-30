import React from 'react';
import P from 'prop-types';
import { Paragraph } from './styles/Paragraph';

export const TextBlockParagraph = ({ children, ...props }) => {
  return (
    <Paragraph {...props}>
      {children}
    </Paragraph>
  );
};

TextBlockParagraph.propTypes = {
  children: P.node.isRequired,
};
