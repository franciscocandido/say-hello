import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from 'formik';

import {
  Container, Label, ErrorField, InputField,
} from './styles';

function Input({
  id, label, name, ...rest
}) {
  return (
    <Container>
      <Label htmlFor={id}>
        {label}
        {' '}
        <small>*</small>
      </Label>
      <ErrorField>
        <ErrorMessage name={name} />
      </ErrorField>
      <InputField
        id={id}
        name={name}
        {...rest}
      />
    </Container>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
