import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import SideBar2 from './component/sideBar2/SideBar2';
// import Header from './component/Header/Header';
import Header2 from './component/Header2/Header2';

function LayoutWithHeaderSidebar({ children }) {
  return (
    <>
      <Header2 />
      <div style={{ display: 'flex' }}>
        <SideBar2/>
        <div className="main-content">
          {/* {children} */}
        </div>
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
