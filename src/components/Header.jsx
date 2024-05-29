import React from 'react';
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} // Set background color based on color mode
      color={colorMode === 'dark' ? 'white' : 'black'} // Set text color based on color mode
    >
      <Text fontSize="xl"> Sales Order Management</Text>
      <IconButton
        aria-label="Toggle Dark Mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
