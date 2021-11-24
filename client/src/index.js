import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// optional configuration for react-alert
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
if (process.env.NODE_ENV !== 'development') console.log = () => {};
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
