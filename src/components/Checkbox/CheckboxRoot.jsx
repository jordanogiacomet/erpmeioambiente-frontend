import P from 'prop-types';
import { CheckboxWrapper } from './styles/CheckboxWrapper';

export const CheckboxRoot = ({ children }) => {
  return (
    <CheckboxWrapper>
      {children}
    </CheckboxWrapper>
  );
};

CheckboxRoot.propTypes = {
  children: P.node.isRequired,
};