import { Box, Button, Center, Flex, HStack, Input, Spacer, Text, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import useStore from './store';
import { useState } from 'react';

export const Username = () => {
  const navigate = useNavigate();
  const [usernameTemp, setUsernameTemp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const changeUsername = useStore((state) => state.changeUsername);
  const username = useStore((state) => state.username);
  const [error, setError] = useState('');

  const click = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (usernameTemp.length > 30) {
        setError('Za długa nazwa! (max 30 znaków)');
        return;
      }
      changeUsername(usernameTemp.substring(0, 30));
      navigate('/');
    }, 500);
  };
  return (
    <Center>
      <VStack spacing={5}>
        <Text>Aktualna nazwa: {username != null ? (username as any).substring(0, 30) : ''}</Text>

        <HStack>
          <Input
            placeholder='Wprowadź nazwę (max 30)'
            value={usernameTemp}
            onChange={(e) => setUsernameTemp(e.target.value)}
          ></Input>
          <Button onClick={() => click()} px={6} isLoading={isLoading}>
            Zmień
          </Button>
        </HStack>
        <Text color={'red'}>{error}</Text>
      </VStack>
    </Center>
  );
};
