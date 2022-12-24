import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SamplePage from './pages/SamplePage';
import RecordPage from './pages/RecordPage';
import StatisticsPage from './pages/StatisticsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="App">
      {/* <SamplePage /> */}
      <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
