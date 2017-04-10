import React, { Component} from 'react';
// import { connect } from 'react-redux';
import RegisterForm from '../common/register_form';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

export default class RegisterPage extends Component {
	constructor(props) {
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Register form Submited!");
	}

	render() {
    return (
			<div className="form-wrapper">
				<div className="form-header">
					<h2 className="form-heading">Login</h2>
				</div>
				<div className="form-body">
		    	<RegisterForm handleSubmit={this.handleSubmit} />
				</div>
			</div>
		);
  }
}
