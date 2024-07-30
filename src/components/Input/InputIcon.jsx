import React from 'react';
import P from 'prop-types';
import { Icon } from './styles/Icon';

export const InputIcon = ({ icon }) => {
  return <Icon icon={icon} />;
};

InputIcon.propTypes = {
  icon: P.oneOfType([P.object, P.array]).isRequired,
};
