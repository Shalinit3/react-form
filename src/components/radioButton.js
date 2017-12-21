import React, { Component } from 'react';
import '../index.css';
import PropTypes from 'prop-types';
import Error from "./errorMessage.js";


const Label = (props) => {
    return (
        <label className={props.class} htmlFor={props.for} > {props.name} </label>
    );
}
class Input extends Component {
    render() {
        return (
            <input
                type='radio'
                className={this.props.class}
                name={this.props.name}
                value={this.props.value}
                id={this.props.id}
                onChange={this.props.onChange}
            />
        );
    }
}


export default class Radio extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            isValid: true,
            errVisibility: false,
            errMessage: ''
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
            errMessage: "This is a required field",
            errVisibility: true,
        });
    }


    handleOnChange = (e) => {
        this.setState({
            value: e.target.value,
            isValid: true,
            errVisibility: false,
            errMessage: ''
        });
    }

    renderInputs = () => {
        const { inputs } = this.props;
        return inputs.map((value, index) => {
            return (
                <div key={this.props.inputs[index].value}>
                    <Input
                        name={this.props.name}
                        class={this.props.inputs[index].class}
                        value={this.props.inputs[index].value}
                        id={this.props.inputs[index].id}
                        onChange={this.handleOnChange}
                    />
                    <Label
                        class={this.props.inputs[index].labelClass}
                        name={this.props.inputs[index].label}
                        for={this.props.inputs[index].id} />

                </div>
            )
        })
    }

    render() {

        return (
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
                <div className="form-group">
                    <label className="field control-label col-sm-12" >{this.props.label}
                        <span className={(this.props.required) ? "error" : "display"}>*</span> 
                        <Error errVisibility={this.state.errVisibility} errMessage={this.state.errMessage} /></label>
                    <div className="col-sm-10">
                        {this.renderInputs()}
                        
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

