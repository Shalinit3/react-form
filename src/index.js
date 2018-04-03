import 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducers from './reducers';
import './index.css';
import Form from './Form/components/Form';

const store = createStore(
  combinedReducers,
  applyMiddleware(
    thunk,
    logger,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root'),
);
