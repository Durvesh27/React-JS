import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './component/AuthContext';
import MyApp from './MyApp';
import Context, { MyContext } from './component/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Context>
      <BrowserRouter>

        <MyApp />

      </BrowserRouter>
      </Context>
    </AuthProvider>

  </React.StrictMode>
);


