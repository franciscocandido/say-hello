import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, SelectField } from './styles';

function Select({
  id, label, children, ...rest
}) {
  return (
    <Container>
      <Label htmlFor={id}>
        {label}
      </Label>
      <SelectField id={id} {...rest}>
        {children}
      </SelectField>
    </Container>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export default Select;
