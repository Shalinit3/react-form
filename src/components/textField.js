import React, { Component } from 'react';
import '../index.css';
import { validate_email, validate_phone, validate_name } from "../validate.js";

class TextField extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      value: ''
    }
  }

  errHandle = (type, value) => {

    // const { required } = this.props;
    // if (required && value.length <= 0) {
    //   this.setState({
    //     errMessage: "This is a required field",
    //     errVisibility: true,
    //   });
    // }

    // else {
    //   if (!valid) {
    //     this.setState({
    //       errMessage: "Please enter a valid " + name,
    //       errVisibility: true,

    //     });
    //   } else {
    //     this.setState({
    //       errMessage: null,
    //       errVisibility: false,
    //     });
    //   }
    // }
  }

  onInputChange = (e) => {
    console.log("inside text", e.target.value);


    if(e.target.value.length >10) {
      return;
    }
    this.setState({
      value: e.target.value
    })
    // if (e.target.type === 'text') {
    //   this.setState({
    //     isValid: validate_name(e.target.value)
    //   });
    // }
    // else if (e.target.name === 'number') {
    //   this.setState({
    //     isValid: validate_phone(e.target.value)
    //   });
    // }
    // else if (e.target.type === 'email') {
    //   this.setState({
    //     isValid: validate_email(e.target.value)
    //   });
    // }
    // else {
    //   this.setState({
    //     isValid: true
    //   });
    // }
    // this.errHandle(e.target.type, e.target.value);
  }

  render() {
    return (
      <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
        <div className="form-group">
          <label className="field control-label col-sm-12" >{this.props.label}
            <span className="error">*</span> </label>
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
            />
            <span className={this.state.errVisibility ? "error" : "error display"}>{this.state.errMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TextField;