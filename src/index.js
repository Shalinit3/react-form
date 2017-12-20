import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Field from './components/textField.js';
import Radio from './components/radioButton.js';
import Select from './components/selectButton.js';
import Checkbox from './components/checkBox.js';



const Check = (props) => {
  return (<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 block">
    <div className="form-group">
      <div className="col-sm-10">
        <button type="submit" className="btn btn-default" onClick={props.onSubmit}>Submit</button>
      </div>
    </div>
  </div>
  );
}

//The root Component
class Form extends Component {

  formSubmit = (e) => {
    e.preventDefault();
    if (this.gender.state.isValid && this.name.state.isValid && this.email.state.isValid && this.phone.state.isValid
      && this.dob.state.isValid && this.docs.state.isValid && this.terms.state.isValid) {
      console.log("form can be submitted");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row main">
          <h3 className="field heading"> Register Here <span className="error"> *Required Fields</span> </h3>
          <form >
            <Field ref={(input) => { this.name = input; }} name={'name'} label={'Name'} type={'text'} class={'form-control'}
              required={true} placeholder={'Enter your name'} />
            <Field ref={(input) => { this.email = input; }} name={'email'} label={'Email'} type={'email'} required={true} class={'form-control'}
              placeholder={'Enter your email id'} />
            <Field ref={(input) => { this.phone = input; }} name={'phone'} label={'Phone'} type={'number'} required={true} class={'form-control'}
              placeholder={'Enter your phone number'} />
            <Field ref={(input) => { this.dob = input; }} name={'dob'} label={'DOB'} type={'date'} class={'form-control'} />
            <Radio label={'Gender'} name={'gender'} ref={(input) => { this.gender = input; }}
              inputs={[{ value: 'male', label: 'Male', class: 'gender', labelClass: 'field', id: 'male' },
              { value: 'female', label: 'Female', class: 'gender', labelClass: 'field', id: 'female' },
              { value: 'other', label: 'Other', class: 'gender', labelClass: 'field', id: 'other' }]} />
            <Select class={'form-control'} label={'State'} name={'state'} ref={(input) => { this.state = input; }}
              inputs={[{ value: 'Andhra Pradesh', label: 'Andhra Pradesh', },
              { value: 'Goa', label: 'Goa' }, { value: 'Gujarat', label: 'Gujarat' },
              { value: 'Uttar Pradesh', label: 'Uttar Pradesh' }]} />
            <Select class={'form-control'} label={'Country'} name={'country'} ref={(input) => { this.country = input; }}
              inputs={[{ value: 'India', label: 'India', },
              { value: 'China', label: 'China' }, { value: 'Nepal', label: 'Nepal' },
              { value: 'Bhutan', label: 'Bhutan' }]} />
            <Checkbox label={'Apply For'} name={'docs'} required={true} ref={(input) => { this.docs = input; }}
              inputs={[{ value: 'pan', label: 'PAN', class: 'check', labelClass: 'field', id: 'pan' },
              { value: 'aadhaar', label: 'Aadhaar', class: 'check', labelClass: 'field', id: 'aadhar' },
              { value: 'passport', label: 'Passport', class: 'check', labelClass: 'field', id: 'passport' }]} />
            <Checkbox name={'terms'} ref={(input) => { this.terms = input; }}
              inputs={[{ value: 'check', label: 'I Agree to the Terms & Conditions', class: 'check', labelClass: 'field', id: 'status' }]} />
            <Check value={'true'} onSubmit={this.formSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
