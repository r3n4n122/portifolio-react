import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home'
import Skils from './skils/Skils';
import Project from './projects/Project';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Skils />
    <Project />
  </React.StrictMode>
);


