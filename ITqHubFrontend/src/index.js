import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ContactUs from './pages/RequestCall/RequestCall.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import About from './pages/About/About.jsx';
import Courses from './pages/Courses/Courses.jsx';
import Login from './Authorization/Login.jsx';
import Register from './Authorization/Register.jsx';
import Verify from './Authorization/Verification.jsx';
import ForgotPassword from './Authorization/ForgotPassword.jsx';
import NotFound from './NotFound.jsx'; // Import the 404 component
import ProtectedRoutes from './Utilities/ProtectedRoutes.jsx';
import ScrollFromTop from './ScrollFromTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Router>
    <ScrollFromTop/>
      <Routes>
      <Route path="/" index element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoutes/>}>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </Router>
  </ChakraProvider>
);
