import React from 'react';
import P from 'prop-types';
import { Icon } from './styles/Icon';

export const InputIcon = ({ icon: IconComponent, ...props }) => {
  return <Icon icon={IconComponent} {...props}/>;
};

InputIcon.propTypes = {
  icon: P.elementType.isRequired,
};
