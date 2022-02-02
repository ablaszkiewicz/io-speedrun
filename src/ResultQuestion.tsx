import { RadioGroup, Stack, Radio, Text, Box, border } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AnswerType, QuestionType } from './Question';

interface Props {
  question: QuestionType;
}

export const ResultQuestion = ({ question }: Props) => {
  const correctAnswer = question.answers.filter((answer) => answer.isCorrect)[0].value;

  const borderColor = () => {
    if (question.checkedAnswer === correctAnswer) {
      return 'green';
    } else {
      return 'red';
    }
  };
  return (
    <Box borderWidth={'2px'} borderRadius={'lg'} m={3} p={3} borderColor={borderColor()}>
      <Text>{question.value}</Text>
      <RadioGroup value={question.checkedAnswer}>
        <Stack>
          {question.answers.map((answer, i) => {
            if (question.checkedAnswer === answer.value) {
              if (answer.isCorrect) {
                return <CorrectAnswer answer={answer} key={i} />;
              } else {
                return <IncorrectAnswer answer={answer} key={i} />;
              }
            } else {
              if (answer.isCorrect) {
                return <CorrectAnswer answer={answer} key={i} />;
              } else {
                return <NeutralAnswer answer={answer} key={i} />;
              }
            }
          })}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export const CorrectAnswer = ({ answer }: any) => (
  <Radio disabled value={answer.value} key={answer.value}>
    <Text color={'green'}>{answer.value}</Text>
  </Radio>
);
export const IncorrectAnswer = ({ answer }: any) => (
  <Radio disabled value={answer.value} key={answer.value}>
    <Text color={'red'}>{answer.value}</Text>
  </Radio>
);
export const NeutralAnswer = ({ answer }: any) => (
  <Radio disabled value={answer.value} key={answer.value}>
    <Text>{answer.value}</Text>
  </Radio>
);
