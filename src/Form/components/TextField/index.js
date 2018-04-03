import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateEmail, validatePhone, validateName } from '../../../utils/validate';
import Error from '../ErrorMessage';


class TextField extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      value: '',
      isValid: true,
      errMessage: '',
      errVisibility: '',
    };
  }

  componentWillMount() {
    const { required, value } = this.props;
    if (required && !value) {
      this.setState({
        isValid: false,
      });
    }
  }


  // Function to be called in case of change and blur event
  onInputChange = () => {
    const { type } = this.props;
    let isValid = false;
    if (type === 'text') {
      isValid = validateName(this.inputField.value);
    } else
    if (type === 'number') {
      isValid = validatePhone(this.inputField.value);
    } else
    if (type === 'email') {
      isValid = validateEmail(this.inputField.value);
    } else
    if (type === 'date') {
      isValid = true;
    } else {
      isValid = true;
    }
    this.errHandle(isValid, this.inputField.value);
  }

  // Function called when form is submitted without being filled
  focus = () => {
    this.inputField.focus();
    this.onInputChange();
  }

  // function that handles the error and error message
  errHandle = (valid, value) => {
    const { required, type, name } = this.props;
    if (required && !value.length) {
      this.setState({
        errMessage: 'This is a required field',
        errVisibility: true,
        isValid: false,

      });
    } else
    if (value.length > 10 && type === 'number') {
      this.setState({
        isValid: false,
        errMessage: 'Phone number can be 10 digits only.',
        errVisibility: true,
        value: this.state.inputValue,
      });

    } else
    if (!valid) {
      this.setState({
        errMessage: `Please enter a valid ${name}`,
        errVisibility: true,
        value,
        isValid: false,
      });
    } else {
      this.setState({
        errMessage: null,
        errVisibility: false,
        value,
        isValid: true,
      });
    }
  }

  render() {
    const {
      label,
      type,
      customClass,
      name,
      placeholder,
      required,
    } = this.props;
    return (
      <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
        <div className="form-group">
          <label className="field control-label col-sm-12" >
            {label}
            <span className={(required) ? 'error' : 'display'}>*</span>
            <Error errVisibility={this.state.errVisibility} errMessage={this.state.errMessage} />
          </label>
          <div className="col-sm-10">
            <input
              type={type}
              className={customClass}
              name={name}
              onChange={this.onInputChange}
              onBlur={this.onInputChange}
              placeholder={placeholder}
              required={required}
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
  customClass: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
TextField.defaultProps = {
  required: false,
  name: '',
  customClass: '',
  label: '',
  placeholder: '',
  value: '',
};

export default TextField;
