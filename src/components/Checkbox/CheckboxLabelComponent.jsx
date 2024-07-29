import P from 'prop-types';
import { CheckboxLabel } from './styles/CheckboxLabel';

export const CheckboxLabelComponent = ({ htmlFor, text, ...props }) => {
  return (
    <CheckboxLabel htmlFor={htmlFor} {...props}>
      {text}
    </CheckboxLabel>
  );
};

CheckboxLabelComponent.propTypes = {
  htmlFor: P.string.isRequired,
  text: P.string.isRequired,
};