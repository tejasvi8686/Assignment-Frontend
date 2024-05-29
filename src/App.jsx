import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './components/Login ';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <ChakraProvider>
      <Router>
        <Flex minHeight="100vh">
          {user && <Sidebar />}
          <Box flex="1">
            {user && <Header />}
            <Box p={4}>
              <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Login onLogin={handleLogin} />} />
                <Route path="/" element={<Login onLogin={handleLogin} />} />
              </Routes>
            </Box>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
