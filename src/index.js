import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Terminator from './components/Terminator'
import 'tachyons';
import { models } from './models.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Terminator id={models[0].id} name={models[0].name} serialNumber={models[0].serialNumber} />
    <Terminator id={models[1].id} name={models[1].name} serialNumber={models[1].serialNumber} />
    <Terminator id={models[2].id} name={models[2].name} serialNumber={models[2].serialNumber} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals