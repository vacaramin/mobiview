import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Views/Index/Index';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

     
      {/* <Route path="" element={<Navigate to="/" replace />} /> */}
    </Routes>
  </BrowserRouter>
</Provider>
);

