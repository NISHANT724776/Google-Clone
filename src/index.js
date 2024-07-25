import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {StateProvider} from "./pages/StateProvider"
import {initialState} from "./pages/reducer";
import reducer from "./pages/reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // initialState = {initialState} reducer = {reducer}
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState = {initialState} reducer = {reducer}>
    <App />

    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
