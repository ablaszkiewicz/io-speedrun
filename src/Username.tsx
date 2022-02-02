import { Box, Button, Center, Flex, HStack, Input, Spacer, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import useStore from './store';
import { useState } from 'react';

export const Username = () => {
  const [usernameTemp, setUsernameTemp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const changeUsername = useStore((state) => state.changeUsername);

  const click = async () => {
    setIsLoading(true);
    changeUsername(usernameTemp);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <Center>
      <HStack>
        <Input
          placeholder='Wprowadź nazwę'
          value={usernameTemp}
          onChange={(e) => setUsernameTemp(e.target.value)}
        ></Input>
        <Button onClick={() => click()} px={6} isLoading={isLoading}>
          Zmień
        </Button>
      </HStack>
    </Center>
  );
};
