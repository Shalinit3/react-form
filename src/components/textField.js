import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { validate_email, validate_phone, validate_name } from "../validate.js";
import Error from "./errorMessage.js";


class TextField extends Component {
  //Constructor to set the initial state
  constructor() {
    super();
    this.state = {
      inputValue: '',
      value: '',
      isValid: true,
      errMessage: '',
      errVisibility: ''
    }
  }

  componentWillMount() {
    if (this.props.required && !this.props.value) {
      this.setState({
        isValid: false,
      });
    }
  }

  // Function called when form is submitted without being filled
  focus = () => {
    this.inputField.focus();
    this.setState({
      errMessage: "This is a required field",
      errVisibility: true,
    });
  }


  //function that handles the error and error message
  errHandle = (valid, value) => {

    const required = this.props.required;
    if (required && !value.length) {
      this.setState({
        errMessage: "This is a required field",
        errVisibility: true,
        value: value,
        inputValue: '',
        isValid: false,

      });
    } else if (value.length > 10 && this.props.type === 'number') {
      this.setState({
        isValid: false,
        errMessage: 'Phone number can be 10 digits only.',
        errVisibility: true,
        value: this.state.inputValue,
      });
      return;
    }
    else if (!valid) {
      this.setState({
        errMessage: "Please enter a valid " + this.props.name,
        errVisibility: true,
        value: value,
        inputValue: '',
        isValid: false,
      });
    } else {
      this.setState({
        errMessage: null,
        errVisibility: false,
        value: value,
        inputValue: value,
        isValid: true,
      });
    }
  }

  // Function to be called in case of change and blur event
  onInputChange = (e) => {
    let isValid = false;
    if (e.target.type === 'text') {
      isValid = validate_name(e.target.value)
    }
    else if (e.target.type === 'number') {
      isValid = validate_phone(e.target.value);
    }
    else if (e.target.type === 'email') {
      isValid = validate_email(e.target.value);
    }
    else if (e.target.type === 'date') {
      isValid = true;
    }
    else {
      isValid = true
    }
    this.errHandle(isValid, e.target.value);
  }

  render() {
    return (
      <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
        <div className="form-group">
          <label className="field control-label col-sm-12" >{this.props.label}
            <span className={(this.props.required) ? "error" : "display"}>*</span>
            <Error errVisibility={this.state.errVisibility} errMessage={this.state.errMessage} />
          </label>
          <div className="col-sm-10">
            <input
              type={this.props.type}
              className={this.props.class}
              name={this.props.name}
              onChange={this.onInputChange}
              onBlur={this.onInputChange}
              placeholder={this.props.placeholder}
              required={this.props.required}
              value={this.state.value}
              ref={(input) => { this.inputField = input; }}
            />
          </div>
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
};
TextField.defaultProps = {
  required: false,
};

export default TextField;