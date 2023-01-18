import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SamplePage from './pages/SamplePage';
import RecordPage from './pages/record/RecordPage';
import StatisticsPage from './pages/statistics/StatisticsPage';
import SettingsPage from './pages/settings/SettingsPage';
import BottomNav from './components/layout/BottomNav';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles';
import CreateRecoredPage from './pages/record/CreateRecordPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SamplePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/record/create" element={<CreateRecoredPage />} />
        </Routes>
        <BottomNav />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
