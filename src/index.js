import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Field from './components/textField.js'

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




class Form extends Component {
  render() {
    return (
      <div className = "container">	
        <div className = "row main">
          <h3 className = "field heading"> Register Here <span className="error"> *Required Fields</span> </h3>
          <form className = "form" >
              <Field name = {'fname'} label = {'First Name'} type = {'text'} class = {'form-control'} />
              <Field name = {'lname'} label = {'Last Name'} type = {'text'} class = {'form-control'} />
              <Field name = {'email'} label = {'Email'} type = {'text'} class = {'form-control'} />
              <Field name = {'phone'} label = {'Phone'} type = {'text'} class = {'form-control'} />
              <Field name = {'dob'} label = {'DOB'} type = {'date'} class = {'form-control'} />
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