import React from 'react';
import { Box, Text, Icon, Button, useColorMode } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FiHome } from 'react-icons/fi'; // Import the desired icon

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    // Redirect to login page
    navigate('/login');
  };

  return (
    <Box
      w="250px"
      p="4"
      bg={colorMode === 'dark' ? 'white' : 'gray.800'} // Set background color based on color mode
      color={colorMode === 'dark' ? 'black' : 'white'} // Set text color based on color mode
    >
      <Text fontSize="2xl" mb="4">Welcome</Text>
      <SidebarItem to="/dashboard" label="Dashboard" icon={FiHome} />
      <Button
        mt="4"
        colorScheme="red"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

const SidebarItem = ({ to, label, icon: IconComponent }) => (
  <Link to={to}>
    <Box display="flex" alignItems="center">
      {IconComponent && <Icon as={IconComponent} mr="2" />} {/* Render the icon if provided */}
      <Text py="2" px="4" borderRadius="md" _hover={{ bg: 'gray.700' }}>{label}</Text>
    </Box>
  </Link>
);

export default Sidebar;
