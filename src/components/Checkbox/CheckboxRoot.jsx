import P from 'prop-types';
import { CheckboxWrapper } from './styles/CheckboxWrapper';

export const CheckboxRoot = ({ children, ...props }) => {
  return (
    <CheckboxWrapper {...props}>
      {children}
    </CheckboxWrapper>
  );
};

CheckboxRoot.propTypes = {
  children: P.node.isRequired,
};