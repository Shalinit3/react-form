import React, { Component } from 'react';
import '../index.css';

const Label = (props) => {
    return(
        <label className = {props.class} htmlFor={props.for} > {props.name} </label>   
    );
}
const Input = (props) => {
        return (
             <input
              type = 'radio'
              className = {props.class}
              name = {props.name}
              value = {props.value}
              id = {props.id}
            />
        );
}


export default class Radio extends Component {
 
    handleOnChange = (e) => {
        console.log(e.target.value);
    }

 render() {
     const inputs = [];
        this.props.inputs.forEach( (value, index ) => {
            inputs.push( <Input name = {this.props.name} class = {this.props.inputs[index].class} 
            value = {this.props.inputs[index].value} id = {this.props.inputs[index].id} 
            onChange = { this.handleOnChange }/>   );
            inputs.push ( <Label class = {this.props.inputs[index].labelClass} 
                                name = {this.props.inputs[index].label} for = { this.props.inputs[index].id} /> );

        });
    return (
        <div className = "col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
          <div className = "form-group">
            <label className = "field control-label col-sm-12" >{this.props.label}
            <span className = "error">*</span> </label>
            <div className = "col-sm-10">
                {inputs}
            </div>
          </div>
        </div>
      );
 }
}

