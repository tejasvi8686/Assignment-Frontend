
import { useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
