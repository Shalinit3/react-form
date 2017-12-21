import React from 'react';
import '../index.css';

const Error = (props) => {
    return (<span className={props.errVisibility ? "error" : "error display"}>{props.errMessage}</span>
    );
}
export default Error;