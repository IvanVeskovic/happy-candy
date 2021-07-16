import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ShopProvider } from './components/ShopContext';

ReactDOM.render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
