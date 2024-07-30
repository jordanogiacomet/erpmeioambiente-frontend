import React from 'react';
import P from 'prop-types';
import { Subtitle } from './styles/Subtitle';

export const TextBlockSubtitle = ({ children, ...props }) => {
  return (
    <Subtitle {...props}>
      {children}
    </Subtitle>
  );
};

TextBlockSubtitle.propTypes = {
  children: P.node.isRequired,
};
