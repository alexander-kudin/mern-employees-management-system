import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index.js';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);