import React, { Component } from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import Error from "./errorMessage.js";


const Label = (props) => {
    return (
        <label className={props.class} htmlFor={props.for} > {props.name} </label>
    );
}
const Input = (props) => {
    return (
        <input
            type='radio'
            className={props.class}
            name={props.name}
            value={props.value}
            id={props.id}
            onChange={props.onChange}
        />
    );
}


export default class Radio extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            isValid: false,
            errVisibility: false,
            errMessage: ''
        };
    }
    handleOnChange = (e) => {
        this.setState({
            value: e.target.value,
            isValid: true,
        });
    }

    render() {

        const inputs = [];
        this.props.inputs.forEach((value, index) => {

            inputs.push(<Input key={this.props.inputs[index].value}
                name={this.props.name}
                class={this.props.inputs[index].class}
                value={this.props.inputs[index].value}
                id={this.props.inputs[index].id}
                onChange={this.handleOnChange}
            />);
            inputs.push(<Label key={this.props.inputs[index].label}
                class={this.props.inputs[index].labelClass}
                name={this.props.inputs[index].label}
                for={this.props.inputs[index].id} />);
        });

        return (
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
                <div className="form-group">
                    <label className="field control-label col-sm-12" >{this.props.label}
                        <span className="error">*</span> </label>
                    <div className="col-sm-10">
                        {inputs}
                        <Error errVisibility={this.state.errVisibility} errMessage={this.state.errMessage} />
                    </div>
                </div>
            </div>
        );
    }
}
Radio.propTypes = {
    inputs: PropTypes.array,
};
Radio.defaultProps = {
    required: false,
};

