import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';
import ReCAPTCHA from "react-google-recaptcha";

import { checkRecaptcha, sendEmail } from '../utils/apiCalls';
import { recaptchaSecret, recaptchaSitekey } from '../Constants/apikeys';
import { emailRegex, stringRegex } from '../Constants/regexConstants';

export default function Contact({ toggleContactFormOpen }) {
  const initialFormValues = {
    name: '',
    email: '',
    message: ''
  }

  const [submitButton, setSubmitButton] = useState('');
  const [token, setToken] = useState('');
  const [checkRecaptchaMutation] = useMutation(checkRecaptcha, {
    onSettled: data => {
      if (data.success === true) {
        setSubmitButton(<button type='submit'>Send</button>);
      } else {
        setSubmitButton('');
      }
    }
  });
  function createRecaptchaBody(token) {
    const body = `secret=${recaptchaSecret}&response=${token}`
    checkRecaptchaMutation(body);
    setToken(token);
  }

  const [activeTimer, setActiveTimer] = useState(false);
  const [sendEmailMutation, sendEmailMutationStatus] = useMutation(sendEmail, {
    onSettled: data => {
      console.log(data);
      if (data.status === 200) {
        setActiveTimer(true);
      }
    }
  });
  function createEmailBody(values) {
    const body = {...values, token: token};
    sendEmailMutation(body);
  }
  useEffect(() => {
    if (activeTimer === false) return;
    const timer = setTimeout(toggleContactFormOpen, 1500);
    return () => clearTimeout(timer);
  }, [activeTimer, toggleContactFormOpen]);

  return (
    <div className='contactOverlay'>
      <Formik
        initialValues={initialFormValues}
        setFieldValue
        values
        onSubmit={createEmailBody}
        >
        {({ handleSubmit, setFieldValue, values }) => (
          <Form
            className='contactForm'
            onSubmit={handleSubmit}
            >
            {sendEmailMutationStatus.isLoading ?
              <p className='fetching'>Sending your email...</p>
              : sendEmailMutationStatus.error ?
              <p className='fetching errorText'>Something went wrong. Error: {sendEmailMutationStatus.error.message}</p>
              : sendEmailMutationStatus.data && sendEmailMutationStatus.data.status === 400 ?
              <p className='fetching errorText'>Something went wrong. Error: {sendEmailMutationStatus.data.error}</p>
              : sendEmailMutationStatus.data && sendEmailMutationStatus.data.status === 200 ?
              <p className='fetching successText'>Your email has been sent successfully. Closing contact form...</p>
              : null}
            <div>
              <label htmlFor='name'>Name: </label>
              <input
                className={values.name === '' ? 'emptyInput' : stringRegex.test(values.name) ? 'successInput' : 'errorInput'}
                type="text"
                id='name'
                onChange={field => setFieldValue(field.target.id, field.target.value)}
                placeholder='Your name'
                value={values.name}
              />
            </div>
            <div>
              <label htmlFor='email'>Email address: </label>
              <input
                className={values.email === '' ? 'emptyInput' : emailRegex.test(values.email) ? 'successInput' : 'errorInput'}
                type="email"
                id='email'
                onChange={field => setFieldValue(field.target.id, field.target.value)}
                placeholder='someone@example.com'
                value={values.email}
                />
            </div>
            <div>
              <label htmlFor='message'>Your message: </label>
              <textarea
                className={values.message === '' ? 'emptyInput' : stringRegex.test(values.message) ? 'successInput' : 'errorInput'}
                id='message'
                onChange={field => setFieldValue(field.target.id, field.target.value)}
                placeholder='Your message...'
                value={values.message}
                />
            </div>
            <ReCAPTCHA
              onChange={createRecaptchaBody}
              sitekey={recaptchaSitekey}
              theme='dark'
              />
            <div>
              {submitButton}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
