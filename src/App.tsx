import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import BottomNav from '@/components/layout/BottomNav';
import CreateRecoredPage from '@/pages/record/CreateRecordPage';
import RecordPage from '@/pages/record/RecordPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import StatisticsPage from '@/pages/statistics/StatisticsPage';
import { theme } from '@/styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/record" />} />
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
