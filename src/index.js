import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import { reducer } from "./store/reducers"
import { BrowserRouter as Router } from "react-router-dom"

import App from './App';

export const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
