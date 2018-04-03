import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Error from '../ErrorMessage';
import InputField from './components/inputField';
import Label from './components/label';

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
      isValid: true,
      errMessage: '',
      errVisibility: '',
    };
  }

  componentWillMount() {
    if (this.props.required && !this.props.value) {
      this.setState({
        isValid: false,
      });
    }
  }

    focus = () => {
      this.setState({
        errMessage: 'This is a required field',
        errVisibility: true,
      });
    }

    handleOnChange = (e) => {
      const arr = this.state.value;
      if (e.target.checked) {
        arr.push(e.target.value);
        this.setState({
          value: arr,
          isValid: true,
          errMessage: ' ',
          errVisibility: false,
        });
      } else {
        arr.splice(arr.indexOf(e.target.value), 1);
        if (this.props.required && arr.length === 0) {
          this.setState({
            value: arr,
            isValid: false,
            errMessage: 'This is a required field',
            errVisibility: true,
          });
        } else {
          this.setState({
            value: arr,
            isValid: true,
          });
        }
      }
    }

    render() {
      const inputs = [];
      this.props.inputs.forEach((option) => {
        inputs.push(<InputField
          key={option.value}
          name={this.props.name}
          class={option.class}
          value={option.value}
          id={option.id}
          onChange={this.handleOnChange}
        />);

        inputs.push(<Label
          key={option.label}
          class={option.labelClass}
          name={option.label}
          for={option.id}
        />);
      });

      return (
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
          <div className="form-group">
            <label className="field control-label col-sm-12" >{this.props.label}
              <span className={(this.props.required) ? 'error' : 'display'}>*</span>
            </label>
            <div className="col-sm-10">
              {inputs}
              <Error errVisibility={this.state.errVisibility} errMessage={this.state.errMessage} />
            </div>
          </div>
        </div>
      );
    }
}

Checkbox.propTypes = {
  inputs: PropTypes.array,
  label: PropTypes.string,
};


Checkbox.defaultProps = {
  required: false,
};
