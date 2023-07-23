import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './component/AuthContext';
import MyApp from './MyApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>

        <MyApp />

      </BrowserRouter>

    </AuthProvider>

  </React.StrictMode>
);


