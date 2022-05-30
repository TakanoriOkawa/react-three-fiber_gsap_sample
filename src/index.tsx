import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Parent from './components/test/Parent';

import { Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <div>
          <Route exact path="/" component={App} />
          <Route exact path="/parent" component={Parent} />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);