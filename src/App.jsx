import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import SideBar from './component/sideBar/sideBar';
import Header from './component/Header/Header';
import User from './component/user/User';
import Categories from './component/categories/Categories';
// import Header2 from './component/Header2/Header2';

function LayoutWithHeaderSidebar({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar/>
        <div className="main-content">
          {children}
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
            <Dashboard/>
          </LayoutWithHeaderSidebar>
        }
      />
      <Route
        path="/categories"
        element={
          <LayoutWithHeaderSidebar>
            <Categories/>
          </LayoutWithHeaderSidebar>
        }
      />
       <Route
        path="/user"
        element={
          <LayoutWithHeaderSidebar>
            <User/>
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
