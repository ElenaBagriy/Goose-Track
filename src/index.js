import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter
    // basename="/so-yummy-react-app"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
