import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter
      // basename="/so-yummy-react-app"
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
