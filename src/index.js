import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Field from './components/textField.js';
import Radio from './components/radioButton.js';
import Select from './components/selectButton.js';


const Check = (props) => {
    return( <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12 block">
    <div className = "form-group"> 
       <div className = "col-sm-10">
         <button type = "submit" className = "btn btn-default" onClick = {console.log(props.value)}>Submit</button>
       </div>
     </div>
   </div>
   );
}

//The root Component
class Form extends Component {
  render() {
    return (
      <div className = "container">	
        <div className = "row main">
          <h3 className = "field heading"> Register Here <span className="error"> *Required Fields</span> </h3>
          <form >
              <Field name = {'fname'} label = {'First Name'} type = {'text'} class = {'form-control'} 
                required = {'true'} placeholder = {'Enter your first name'} />
              <Field name = {'lname'} label = {'Last Name'} type = {'text'} class = {'form-control'}
                placeholder = {'Enter your last name'}  />
              <Field name = {'email'} label = {'Email'} type = {'email'} class = {'form-control'}  
                placeholder = {'Enter your email id'}  />
              <Field name = {'phone'} label = {'Phone'} type = {'number'} class = {'form-control'} 
                placeholder = {'Enter your phone number'}   />
              <Field name = {'dob'} label = {'DOB'} type = {'date'} class = {'form-control'} />
              <Radio type = {'radio'} label = {'Gender'} name = {'gender'}
                inputs = {[{value: 'male', label: 'Male', class: 'gender', labelClass : 'field', id: 'male'}, 
                           {value: 'female', label: 'Female', class: 'gender', labelClass : 'field', id: 'female' }, 
                           {value: 'other', label: 'Other', class: 'gender', labelClass : 'field', id: 'other' }]}/> 
              <Select class = {'form-control'} label = {'State'} name = {'state'}
                inputs = {[{value: 'Andhra Pradesh', label: 'Andhra Pradesh', }, 
                           {value: 'Goa', label: 'Goa' },  {value: 'Gujarat', label: 'Gujarat' }, 
                           {value: 'Uttar Pradesh', label: 'Uttar Pradesh' }]}/>          
             <Select class = {'form-control'} label = {'Country'} name = {'country'}
                inputs = {[{value: 'India', label: 'India', }, 
                           {value: 'China', label: 'China' },  {value: 'Nepal', label: 'Nepal' }, 
                           {value: 'Bhutan', label: 'Bhutan' }]}/> 
            <Check value = {'Done'} />
              
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
