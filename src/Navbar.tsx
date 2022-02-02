import { Box, Button, Flex, Spacer, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w='100%' position={'fixed'} p='5' backgroundColor={colorMode === 'dark' ? '#1a202c' : 'white'} shadow='lg'>
      <Button mx={2} onClick={() => navigate('/')}>
        Graj
      </Button>
      <Button mx={2} onClick={() => navigate('/scores')}>
        Drabinka
      </Button>
      <Button mx={2} onClick={() => navigate('/username')}>
        Zmień nazwę
      </Button>
      <Spacer />
      <ColorModeSwitcher justifySelf='flex-end' />
    </Flex>
  );
};
