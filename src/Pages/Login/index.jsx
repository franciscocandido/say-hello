import React, { useState } from 'react';
import * as yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

import DefaultPage from '../../Components/DefaultPage';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Select from '../../Components/Select';
import Languages from '../../Data/languages.json';

function Login() {
  const [Submitted, setSubmitted] = useState(false);
  // Language Selector
  const arraySize = Languages.languages.length;
  const languagesOptions = [];
  for (let c = 0; c < arraySize; c += 1) {
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
    language: '',
  };

  const validate = yup.object().shape({
    username: yup.string()
      .max(15, '15 characters or less')
      .required('Username field is required'),
    language: yup.string(),
  });

  function submit(data) {
    const userUsername = data.username;
    const userLanguage = data.language;

    localStorage.setItem('@sayhello/username', userUsername);
    localStorage.setItem('@sayhello/language', userLanguage);
    setSubmitted(true);
  }

  return (
    <DefaultPage>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={submit}
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
                defaultValue={values.language}
                onChange={handleChange}
                onBlur={handleBlur}
                name="language"
              >
                <option disabled value="">Select a Language</option>
                {languagesOptions}
              </Select>
              <Button
                value="Login"
                type="submit"
              />
            </Form>
            {Submitted && (
              <Redirect to="/hello" />
            )}
          </Container>
        )}
      </Formik>
    </DefaultPage>
  );
}

export default Login;
