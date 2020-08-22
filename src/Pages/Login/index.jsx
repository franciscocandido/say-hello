import React from 'react';
import * as yup from 'yup';

import { Formik, Form, Field } from 'formik';

import { Container } from './styles';

import DefaultPage from '../../Components/DefaultPage';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Select from '../../Components/Select';
import Languages from '../../Data/languages.json';

function Login() {
  // Language Selector
  const arraySize = Languages.languages.length;
  const languagesOptions = [];
  for (var c = 0; c < arraySize; c += 1) {
    languagesOptions
      .push(
        <option
          key={Languages.languages[c].code}
          value={Languages.languages[c].code}
        >
          {Languages.languages[c].name}
        </option>,
      );
  }

  const initialValues = {
    username: '',
  };

  const validate = yup.object().shape({
    username: yup.string()
      .max(15, 'Fifteen characters or less')
      .required('This field is required'),
  });

  return (
    <DefaultPage>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
      >
        {({
          values, handleChange, handleBlur, handleSubmit,
        }) => (
          <Container>
            <Form onSubmit={handleSubmit}>
              <Field
                as={Input}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                id="usernameInput"
                name="username"
                type="text"
                label="Username"
                placeholder="Your username"
              />
              <Select
                id="languageSelect"
                label="Select Language (Optional)"
                defaultValue=""
              >
                <option disabled value="">Select a Language</option>
                {languagesOptions}
              </Select>
              <Button
                value="Login"
              />
            </Form>
          </Container>
        )}
      </Formik>
    </DefaultPage>
  );
}

export default Login;
