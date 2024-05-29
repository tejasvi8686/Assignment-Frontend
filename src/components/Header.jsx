import React from 'react';
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className={`flex justify-between items-center p-4 bg-${colorMode === 'dark' ? 'gray-800' : 'gray-100'} text-${colorMode === 'dark' ? 'white' : 'black'}`}>
      <Text fontSize="xl">Sales Order Management</Text>
      <IconButton
        aria-label="Toggle Dark Mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        className="focus:outline-none"
      />
    </header>
  );
};

export default Header;
