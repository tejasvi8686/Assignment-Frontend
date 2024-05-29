import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    // Simple authentication logic
    if (username === "raj" && password === "raj") {
      onLogin(username);
      navigate("/dashboard");
    } else {
      toast({
        title: "Invalid credentials.",
        description: "Please check your username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"
      >
        <Heading mb={6} textAlign="center">
          Login
        </Heading>
        <FormControl id="username" mb={4}>
          <FormLabel className="">Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </FormControl>
        <Stack direction="row" spacing={4} justify="flex-end">
          <Button colorScheme="teal" onClick={handleLogin} className="w-full">
            Login
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
