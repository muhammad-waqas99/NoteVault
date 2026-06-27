import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteState from './contexts/Note/NoteState';
import AlertState from './contexts/Alert/AlertState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <NoteState>
    <AlertState>
    <App />
    </AlertState>
    </NoteState>
  </BrowserRouter>
);


