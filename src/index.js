/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './containers/HomePage/HomePage';
import counterReducer from './redux/reducer/globalReducer';

// Store #1
const storeRedux = createStore(counterReducer)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
