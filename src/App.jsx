import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/authPage';
import PrivateRoutes from './utils/privateRoutes';
import AdminDashboard from './Pages/adminDashboard'
import UserDashboard from './Pages/userDashboard'
import LandingPage from './Pages/landingPage'
import { AuthTokenProvider } from './utils/authTokenContext';


// Assuming you have a separate Login component in a file named Login.jsx
import './App.css';

function App() {
  return (
    <AuthTokenProvider>
    <Router>
      <Routes>
        {/* privateRoutes */}
          <Route element={<PrivateRoutes/>} >
            <Route element={<AdminDashboard/>} path='/Dashboard' exact/>
            <Route element={<UserDashboard/>} path='/Home'/>
          </Route>
        {/* privateRoutes */}
        <Route element={<AuthPage/>} path='/Login'/>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </AuthTokenProvider>
  );
}

export default App;
