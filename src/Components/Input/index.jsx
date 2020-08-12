import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, InputField } from './styles';

function Input({ id, label, ...rest }) {
  return (
    <Container>
      <Label htmlFor={id}>
        {label}
        {' '}
        <small>*</small>
      </Label>
      <InputField
        id={id}
        {...rest}
      />
    </Container>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
