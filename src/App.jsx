import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/dashboard';
import SideBar from './component/sideBar/SideBar';
import Header from './component/Header/Header';

function LayoutWithHeaderSidebar({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        {children}
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <LayoutWithHeaderSidebar>
            <Dashboard />
          </LayoutWithHeaderSidebar>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
