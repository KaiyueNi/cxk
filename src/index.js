import React from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

// ReactDOM.render(<App/>, document.getElementById('root')); react17

