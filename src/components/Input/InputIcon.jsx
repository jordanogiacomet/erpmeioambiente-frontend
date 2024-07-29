import React from 'react';
import P from 'prop-types';
import { Icon } from './styles/Icon';

export const InputIcon = ({ icon: IconComponent }) => {
  return <Icon icon={IconComponent} />;
};

InputIcon.propTypes = {
  icon: P.elementType.isRequired,
};
