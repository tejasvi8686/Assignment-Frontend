import React from 'react';
import { Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      colorScheme="teal"
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
    />
  );
};

export default ThemeToggle;
