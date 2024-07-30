import React from 'react';
import P from 'prop-types';
import { Heading } from '../Heading/Heading';

export const TextBlockHeading = ({ children, ...props }) => {
  return (
    <Heading {...props}>
      {children}
    </Heading>
  );
};

TextBlockHeading.propTypes = {
  children: P.node.isRequired,
};
