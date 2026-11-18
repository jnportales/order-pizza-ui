import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import OrderPage from './pages/OrderPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
