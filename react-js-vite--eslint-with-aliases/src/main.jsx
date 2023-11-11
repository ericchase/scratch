import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { a } from '@/a/a';
console.log(a);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
