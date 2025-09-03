import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/booking-frontend">
        {/* <Router> */}
          <App />
        {/* </Router> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
