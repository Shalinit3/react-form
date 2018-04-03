import React, { Component } from 'react';
import Field from '../TextField';
import Radio from '../RadioButton';
import Select from '../SelectButton';
import Checkbox from '../CheckboxInput';

const Check = props => (
  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 block">
    <div className="form-group">
      <div className="col-sm-10">
        <button type="submit" className="btn btn-default" onClick={props.onSubmit}>Submit</button>
      </div>
    </div>
  </div>
);

// The root Component
class Form extends Component {
  formSubmit = (e) => {
    e.preventDefault();

    if (this.gender.state.isValid && this.name.state.isValid && this.email.state.isValid
      && this.phone.state.isValid
      && this.dob.state.isValid && this.docs.state.isValid && this.terms.state.isValid) {
      console.log(
        this.gender.state.value, this.name.state.value,
        this.email.state.value, this.phone.state.value,
        this.dob.state.value, this.docs.state.value,
      );
    } else if (!this.name.state.isValid) {
      this.name.focus();
    } else if (!this.email.state.isValid) {
      this.email.focus();
    } else if (!this.phone.state.isValid) {
      this.phone.focus();
    } else if (!this.dob.state.isValid) {
      this.dob.focus();
    } else if (!this.gender.state.isValid) {
      this.gender.focus();
    } else if (!this.docs.state.isValid) {
      this.docs.focus();
    } else if (!this.terms.state.isValid) {
      this.terms.focus();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row main">
          <div className="col-md-12">
            <h3 className="field heading"> Register Here <span className="error"> *Required Fields</span> </h3>
          </div>
          <div className="col-md-12">
            <form >
              <div className="row main">

                <Field
                  ref={(input) => { this.name = input; }}
                  name="name"
                  label="Name"
                  type="text"
                  customClass="form-control"
                  placeholder="Enter your name"
                />
                <Field
                  ref={(input) => { this.email = input; }}
                  name="email"
                  label="Email"
                  type="email"
                  required
                  customClass="form-control"
                  placeholder="Enter your email id"
                />
                <Field
                  ref={(input) => { this.phone = input; }}
                  name="phone"
                  label="Phone"
                  type="number"
                  required
                  customClass="form-control"
                  placeholder="Enter your phone number"
                />
                <Field
                  ref={(input) => { this.dob = input; }}
                  name="dob"
                  label="DOB"
                  type="date"
                  customClass="form-control"
                />
                <Radio
                  label="Gender"
                  required
                  name="gender"
                  ref={(input) => { this.gender = input; }}
                  inputs={[{
                    value: 'male', label: 'Male', class: 'gender', labelClass: 'field', id: 'male',
                  },
                  {
                    value: 'female', label: 'Female', class: 'gender', labelClass: 'field', id: 'female',
                  },
                  {
                    value: 'other', label: 'Other', class: 'gender', labelClass: 'field', id: 'other',
                  }]}
                />
                <Select
                  customClass="form-control"
                  label="State"
                  name="state"
                  ref={(input) => { this.state = input; }}
                  inputs={[{ value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
                  { value: 'Goa', label: 'Goa' }, { value: 'Gujarat', label: 'Gujarat' },
                  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' }]}
                />
                <Select
                  customClass="form-control"
                  label="Country"
                  name="country"
                  ref={(input) => { this.country = input; }}
                  inputs={[{ value: 'India', label: 'India' },
                  { value: 'China', label: 'China' }, { value: 'Nepal', label: 'Nepal' },
                  { value: 'Bhutan', label: 'Bhutan' }]}
                />
                <Checkbox
                  label="Apply For"
                  name="docs"
                  required
                  ref={(input) => { this.docs = input; }}
                  inputs={[
                    {
                      value: 'pan', label: 'PAN', class: 'check', labelClass: 'field', id: 'pan',
                    },
                    {
                      value: 'aadhaar', label: 'Aadhaar', class: 'check', labelClass: 'field', id: 'aadhar',
                    },
                    {
                      value: 'passport', label: 'Passport', class: 'check', labelClass: 'field', id: 'passport',
                    }]}
                />
                <Checkbox
                  name="terms"
                  ref={(input) => { this.terms = input; }}
                  required
                  inputs={[{
                    value: 'check', label: 'I Agree to the Terms & Conditions', class: 'check', labelClass: 'field', id: 'status',
                  }]}
                />
                <Check value="true" onSubmit={this.formSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

