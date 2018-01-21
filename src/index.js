import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


// const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
