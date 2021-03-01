import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import configureStore from '../src/store/configureStore'


// const store = configureStore()
// console.log(store.getState())

// store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

