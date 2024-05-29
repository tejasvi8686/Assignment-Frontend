
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from './components/LoginPage';
import Dashboard from './pages/Dashboard';
import theme from './theme';  

const PrivateRoute = ({ children }) => {
  return localStorage.getItem('authenticated') ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
      
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
