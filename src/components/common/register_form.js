import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Field name="email" component='input' type="email"/>
        </div>
        <div>
          <label>Password</label>
          <Field name="password" component='input' type="password"/>
        </div>
        <div>
          <label>Password</label>
          <Field name="password_confirmation" component='input' type="password"/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

// Decorate the form component
RegisterForm = reduxForm({
  form: 'registerForm' // a unique name for this form
})(RegisterForm);

export default RegisterForm;
