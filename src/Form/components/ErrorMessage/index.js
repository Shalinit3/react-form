import React from 'react';

const Error = props => <span className={props.errVisibility ? 'error' : 'error display'}>{props.errMessage}</span>;

export default Error;
