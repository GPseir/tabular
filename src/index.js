import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from "react-router";
import { BrowserRouter } from 'react-router-dom'
import { history } from './components/Login/history'

ReactDOM.render(
    <BrowserRouter >
        <Router history={history}>
            <App />
        </Router>
    </BrowserRouter>
    ,
    document.getElementById('root'));

