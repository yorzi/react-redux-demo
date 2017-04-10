/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */

import React, { Component} from 'react';
// import { connect } from 'react-redux';
import LoginForm from '../common/LoginForm';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

export default class LoginPage extends Component {
	constructor(props) {
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Login form Submited!");
	}

	render() {
    return (
			<div className="form-wrapper">
				<div className="form-header">
					<h2 className="form-heading">Login</h2>
				</div>
				<div className="form-body">
		    	<LoginForm handleSubmit={this.handleSubmit} />
				</div>
			</div>
		);
  }
}
