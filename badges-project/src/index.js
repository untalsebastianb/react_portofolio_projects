import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge.jsx';
import BadgeNew from './pages/BadgeNew.jsx'
import Badges from './pages/Badges';


ReactDOM.render(
  <React.StrictMode>
    <Badges/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

