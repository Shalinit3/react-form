import React, { Component } from 'react';

export default class InputField extends Component {
    render() {
        return (
            <input
                type='checkbox'
                className={this.props.class}
                name={this.props.name}
                value={this.props.value}
                id={this.props.id}
                onChange={this.props.onChange}
                ref={this.props.ref}
            />
        );
    }

}
