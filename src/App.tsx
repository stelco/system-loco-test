import React from 'react';
import './global.scss';
import DevicesGrid from './components/devices/DevicesGrid';
import Device from './components/devices/[id]/device/Device';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>System Loco test</h1>
          <p>Devices Grid example project</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DevicesGrid />} />
            <Route path="/devices/:deviceId" element={<Device />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
