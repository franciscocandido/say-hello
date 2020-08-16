import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonField } from './styles';

function Button({ value, ...rest }) {
  return (
    <Container>
      <ButtonField {...rest}>
        {value}
      </ButtonField>
    </Container>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
