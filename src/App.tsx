import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'main'}>
                <h1>App</h1>
            </div>
            <Routes>
                <Route>Route one</Route>
            </Routes>
            <p>end</p>
        </BrowserRouter>
    );
};