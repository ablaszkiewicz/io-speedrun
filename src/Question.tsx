import { RadioGroup, Stack, Radio, Text, Box } from '@chakra-ui/react';
import { useEffect } from 'react';

export interface QuestionType {
  value: string;
  answers: AnswerType[];
  checkedAnswer?: string;
}

export interface AnswerType {
  value: string;
  isCorrect: boolean;
}

interface Props {
  question: QuestionType;
}

export const Question = ({ question }: Props) => {
  return (
    <Box borderWidth={'2px'} borderRadius={'lg'} m={3} p={3}>
      <Text mb={2}>{question.value}</Text>
      <RadioGroup>
        <Stack>
          {question.answers.map((answer) => (
            <Radio
              value={answer.value}
              key={answer.value}
              onChange={(e) => {
                question.checkedAnswer = answer.value;
              }}
            >
              {answer.value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};
