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

     errHandle = (value, valid, type, required) => {
      if(required && value.length <= 0) {
        this.setState({
          errMessage : "This is a required field" ,
          errVisibility : true ,
        });
      }
      else {
        if(!valid){
          this.setState({
            errMessage : "Please enter a valid " + type ,
            errVisibility : true ,
            
          });
        }
        else {
          this.setState({
          errMessage : null ,
          errVisibility : false ,
          });
        }
      }  
    }
  
    onInputChange = (e) => {
      if(e.target.type === 'text'){
        this.setState({
          isValid: validate_name(e.target.value)
        });
      }
      else if(e.target.type === 'number'){
        this.setState({
          isValid: validate_phone(e.target.value)
        });
      }
      else if(e.target.type === 'email'){
        this.setState({
          isValid: validate_email(e.target.value)
        });
      }
      else {
        this.setState({
          isValid: true
        });
      }
      console.log(e.target.required); 
      this.errHandle(e.target.value, this.state.isValid, e.target.type , e.target.required )  ; 
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
                 <span className = { this.state.errVisibility ?  "error" : "error display"  }>{this.state.errMessage}</span>
               </div>
             </div>
         </div>
     );
    }
  }

  export default Field;