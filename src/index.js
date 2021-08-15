import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { store } from "./store/store";
import { Provider } from 'react-redux';
import { currencyCodeChange, getCurrencyCode} from './store/rates';

store.dispatch( function getInitialRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(currencyCodeChange(currencyCode));
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
