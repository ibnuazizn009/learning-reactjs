/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Library

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import counterReducer from './redux/reducer/globalReducer';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './containers/HomePage/HomePage';

// Store #1
// const storeRedux = createStore(counterReducer)



// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={storeRedux}>
//       <HomePage />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
      <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
