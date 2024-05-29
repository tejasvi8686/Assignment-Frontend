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
    <Box
      maxW="md"
      mx="auto"
      mt="10%"
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={6} textAlign="center">
        Login
      </Heading>
      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Stack direction="row" spacing={4} justify="flex-end">
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
