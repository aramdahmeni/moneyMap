import React from 'react';
import { Navigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sideBar';
import Dashboard from './components/dashboard/dashboard';
import StatsCard from './components/statsCard/StatsCard'; 
import Deadlines from './components/deadlines/deadlines';  
import ProjectList from './components/projectlist/projectList';
import './App.css'; 
import TransactionHistory from './components/transactionHistory/transactionHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">

{/*
          <div>
          <TransactionHistory />
          </div>
          <div>
            <ProjectList/> </div>
*/}
          <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        {/*  <Route path="/projects" element={<ProjectList />} />*/}
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;