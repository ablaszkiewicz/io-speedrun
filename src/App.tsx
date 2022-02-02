import { ChakraProvider, Box, Spacer, Flex, Divider, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Navbar } from './Navbar';
import { Exam } from './Exam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Results } from './Results';
import { Scores } from './Scores';
import { Username } from './Username';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize='xl'>
      <BrowserRouter>
        <Navbar />
        <Text mb='5'>.</Text>
        <Text mb='8'>.</Text>

        <Routes>
          <Route index element={<Exam />} />
          <Route path='/result' element={<Results />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/username' element={<Username />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);
