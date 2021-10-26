import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pwdField: '',
      submitBtn: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailError = 'Field Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)
      ) {
        errors.emailError = 'Username should be an email';
      }
      if(!values.pwdField) errors.pwdError = 'Field Required';
      if(values.emailField && values.pwdField) values.submitBtn = 'Login Successful';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailError ? <div style={{color: 'red'}}>{formik.errors.emailError}</div>: null}
        <div>Password</div>
        <input id="pwdField" type="text" onChange={formik.handleChange} value={formik.values.pwdField}/>
        {formik.errors.pwdError ? <div style={{color: 'red'}}>{formik.errors.pwdError}</div>: null}
        <button id='submitBtn' type='submit' onChange={formik.handleChange} value={formik.values.submitBtn}>Submit</button>
        {formik.values.submitBtn ? <div style={{color: 'green'}}>{formik.values.submitBtn}</div>: null}
      </form>
      
    </div>
  );
}

export default App;
