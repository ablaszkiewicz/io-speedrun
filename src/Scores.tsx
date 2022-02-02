import { Box, Button, Center, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AnswerType, Question, QuestionType } from './Question';

interface Score {
  username: string;
  score: number;
  time: number;
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
    <Box p={6}>
      <Table variant='simple'>
        <TableCaption>Drabina chwały</TableCaption>
        <Thead>
          <Tr>
            <Th>Nazwa użytnika</Th>
            <Th isNumeric>Punkty</Th>
            <Th isNumeric>Czas (ms)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((score) => (
              <Tr>
                <Td>{score.username}</Td>
                <Td isNumeric>{score.score}</Td>
                <Td isNumeric>{score.time}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};
