import { Box, Button, Center, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Score {
  username: string;
  score: number;
  time: number;
  tries: number;
}

export const Scores = () => {
  const [data, setData] = useState<Score[]>();
  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    const { data } = await axios.get('/getScores');
    setData(data);
  };
  return (
    <Box p={[0, 0, 6]}>
      <Center mb={6}>Drabina resetuje się codziennie o 14:37</Center>
      <Table variant='simple'>
        <TableCaption>Drabina chwały</TableCaption>
        <Thead>
          <Tr>
            <Th>Nazwa użytnika</Th>
            <Th isNumeric>Najlepszy wynik</Th>
            <Th isNumeric>Najlepszy czas (s)</Th>
            <Th isNumeric>Próby</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((score) => (
              <Tr>
                <Td>{score.username}</Td>
                <Td isNumeric>{score.score}</Td>
                <Td isNumeric>{(score.time / 1000).toFixed(2)}</Td>
                <Td isNumeric>{score.tries}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};
