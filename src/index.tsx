import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './page/Index';
import './scss/base/base.scss';
import { Route, BrowserRouter } from "react-router-dom";
import SecondPage from "./page/SecondPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/secondPage" component={SecondPage} />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);