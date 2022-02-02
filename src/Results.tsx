import { Button, Center, Text } from '@chakra-ui/react';
import { AnswerType, Question, QuestionType } from './Question';
import { useLocation } from 'react-router-dom';
import { ResultQuestion } from './ResultQuestion';
import { useEffect } from 'react';

export const Results = () => {
  const { state }: any = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const correctAnswers = () => {
    let correct = 0;

    state.questions.forEach((question: QuestionType) => {
      const correctAnswer = question.answers.filter((answer) => answer.isCorrect)[0].value;

      if (question.checkedAnswer === correctAnswer) {
        correct++;
      }
    });

    return correct;
  };

  return (
    <>
      <Text m={5}>
        Twój wynik: {correctAnswers()} / 10. Twój czas (ms): {state.time}
      </Text>
      {(state.questions as QuestionType[]).map((question, i) => (
        <ResultQuestion question={question} key={i} />
      ))}
    </>
  );
};
