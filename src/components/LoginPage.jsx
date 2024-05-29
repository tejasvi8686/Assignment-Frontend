
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button } from '@chakra-ui/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box>
     
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

export default LoginPage;
