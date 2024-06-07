import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/landingPage';
import PrivateRoutes from './utils/privateRoutes';
import AdminDashboard from './Pages/adminDashboard'
import UserDashboard from './Pages/userDashboard'

// Assuming you have a separate Login component in a file named Login.jsx
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route element={<AdminDashboard/>} path='/Dashboard' exact/>
          <Route element={<UserDashboard/>} path='/Home'/>
        </Route>


        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
