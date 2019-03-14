import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Readme from './README.md';
import { Formik, Form, Field, ErrorMessage, Yup } from './index';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const Demo = (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          <ErrorMessage name="name" />
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

storiesOf('组件列表|Formik', module)
  .addDecorator(withDocs(Readme))
  .add('Readme', () => <div style={{ width: 400 }}>{Demo}</div>);
