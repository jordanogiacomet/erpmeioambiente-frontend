import P from 'prop-types';
import { CheckboxField } from './styles/CheckboxField';


export const CheckboxFieldComponent = ({ id, checked, onChange, ...props  }) => {
  return (
    <CheckboxField id={id} checked={checked} onChange={onChange} type="checkbox" />
  );
};

CheckboxFieldComponent.propTypes = {
  id: P.string.isRequired,
  checked: P.bool.isRequired,
  onChange: P.func.isRequired,
};