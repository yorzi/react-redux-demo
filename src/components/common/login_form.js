import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
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
          <Field name="password" component='input' type="text"/>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

// Decorate the form component
LoginForm = reduxForm({
  form: 'loginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;
