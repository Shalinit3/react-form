import React from 'react';

 const  Label = (props) => {
    return (
        <label className={props.class} htmlFor={props.for} > {props.name} </label>
    );
}
export default Label;