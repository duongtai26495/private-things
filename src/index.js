import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './store';
import { Authen, Error, Home, Profile } from './page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route errorElement={<Error />} element={<App />} >
            <Route element={<Home />} path="/" />
            <Route element={<Profile />} path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
