import React, { Component } from 'react';
import '../index.css';
import { validate_email, validate_phone, validate_name } from "../validate.js";

class Field extends Component {

    constructor() {
      super();
  
      this.state = { 
        inputValue: '',
      }
    }
  
    onInputChange = (e) => {
      if(e.target.name === 'fname'){
        this.setState({
          fname: validate_name(e.target.value)
        });
      }
      if(e.target.name === 'lname'){
        this.setState({
          inputValue: validate_name(e.target.value)
        });
      }
      if(e.target.name === 'phone'){
        this.setState({
          inputValue: validate_phone(e.target.value)
        });
      }
      if(e.target.name === 'email'){
        this.setState({
          inputValue: validate_email(e.target.value)
        });
      }
     
    } 
  
    render(){
      return(
        <div className = "col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
             <div className = "form-group">
               <label className = "field control-label col-sm-12" >{this.props.label}
                 <span className = "error">*</span> </label>
               <div className = "col-sm-10">
                 <input 
                    type = {this.props.type} 
                    className = {this.props.class} 
                    name = {this.props.name}
                    onChange = {this.onInputChange} 
                    placeholder = {this.props.placeholder }
                    required = {this.props.required } />
                 <span id = "err_fname" className = "error">{this.state.inputValue}</span>
               </div>
             </div>
         </div>
     );
    }
  }

  export default Field;