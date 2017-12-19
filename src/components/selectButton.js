import React, { Component } from 'react';
import '../index.css';

const Option = (props) => {
        return (
             <option
              className = {props.class}
              value = {props.value}
            >
            {props.label}
            </option>
        );
}


export default class Select extends Component {
    constructor() {
        super();
        this.state = {
          value: '',
        };
      }
    handleOnChange = (e) => {
        this.setState({
            value: e.target.value,
        });
        console.log(e.target.value);
    }

 render() {
     const inputs = [];
        this.props.inputs.forEach( (value, index ) => {

            inputs.push( <Option key = {this.props.inputs[index].value} 
                         class = {this.props.inputs[index].class} value = {this.props.inputs[index].value} 
                          label = {this.props.inputs[index].label}   />   );

        });
    return (
        <div className = "col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
          <div className = "form-group">
            <label className = "field control-label col-sm-12" >{this.props.label}
            <span className = "error">*</span> </label>
            <div className = "col-sm-10">
            <select className = {this.props.class}  name = {this.props.name} onChange = {this.handleOnChange} >
                 {inputs}
			</select>
               
            </div>
          </div>
        </div>
      );
 }
}