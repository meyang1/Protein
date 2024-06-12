// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartingPage from './components/StartingPage';
import LoginPage from './components/LoginPage.js';
import AccountsPage from './components/AccountsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
