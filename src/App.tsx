import React from 'react';
import Login from './pages/Login/login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDetails from './pages/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<h3>Page Not Found</h3>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="dashboard/:id"  element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
