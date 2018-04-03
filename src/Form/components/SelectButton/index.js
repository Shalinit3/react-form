import React, { Component } from 'react';

const Option = (props) => {
  return (
    <option
      className={props.class}
      value={props.value}
    >
      {props.label}
    </option>
  );
};

class Select extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  // Function to be called in case of change and blur event
  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  renderInputs = () => {
    const options = [];
    const { inputs } = this.props;
    inputs.forEach((option) => {
      options.push(<Option
        key={option.value}
        class={option.customClass}
        value={option.value}
        label={option.label}
      />);
    });
    return options;
  }

  render() {
    const { label, name, customClass } = this.props;
    return (
      <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 block">
        <div className="form-group">
          <label className="field control-label col-sm-12" >{label}</label>
          <div className="col-sm-10">
            <select className={customClass} name={name} onChange={this.handleOnChange} >
              {this.renderInputs()}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
