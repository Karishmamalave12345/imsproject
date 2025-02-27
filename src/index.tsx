import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
// boostrap configure 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { AuthProvider } from './Contax/AuthContext';
import store from './Redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    {/* <App /> */}

    <Provider store={store}> 
   <App/>
   </Provider>

   

   
    {/* </AuthProvider> */}
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
