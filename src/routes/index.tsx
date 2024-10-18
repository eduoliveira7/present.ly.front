import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import { AuthProvider } from '../context/authContext';
import ProtectedRoute from './protectedRoute';
import NotFound from '../pages/notfound';
import PublicRoute from './publicRoute';
import Dashboard from '../pages/dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme as lightTheme } from '../styles/theme';

const RoutesApp: React.FC = () => {
  return (
    <Router>

    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PublicRoute element={<SignIn />} />} />
            <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
            <Route
              path="/dashboard"
              element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default RoutesApp;
