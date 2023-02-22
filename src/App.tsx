import React from 'react';
import Login from './pages/Login/login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<h3>Page Not Found</h3>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
