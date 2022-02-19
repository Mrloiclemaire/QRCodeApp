import React from 'react';
import './main.css'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Main = () => {
    return (
        <div className='background' >
            <nav>
                <Link to="/Menu" className='mainLink'>MENU</Link>
                <Link to="/QR" className='mainLink'>ADMIN</Link>
            </nav>
        </div>
    );
};

export default Main;