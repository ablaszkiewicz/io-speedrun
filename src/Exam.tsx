import { Button, Center } from '@chakra-ui/react';
import { AnswerType, Question, QuestionType } from './Question';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useStore from './store';
import axios from 'axios';
import data from '../public/closed_questions.json';

function shuffle(array: any[]) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const Exam = () => {
  const navigate = useNavigate();
  const username = useStore((state) => state.username);
  const [startTime, setStartTime] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>();
  useEffect(() => {
    if (username === null) {
      navigate('/username');
    }

    setStartTime(Date.now());

    const questionsTemp: QuestionType[] = [];
    const numbers = shuffle(Array.from(Array(data.length).keys())).slice(0, 10);
    numbers.forEach((number) => {
      const questionBedra = data[number];
      const answers: AnswerType[] = [];
      console.log(questionBedra);
      let i = 0;
      questionBedra.answers.forEach((answer) => {
        answers.push({ value: answer, isCorrect: i == questionBedra.correctAnswer ? true : false });
        i++;
      });
      const question: QuestionType = { answers: answers, value: questionBedra.content };
      questionsTemp.push(question);
      console.log(question);
    });
    setQuestions(questionsTemp);
  }, []);

  const postScore = async () => {
    setIsLoading(true);
    await axios.post('/postScore', { username: username, score: correctAnswers(), time: Date.now() - startTime! });
    setIsLoading(false);
    navigate('/result', { state: { questions: questions, time: Date.now() - startTime! } });
  };

  const correctAnswers = () => {
    let correct = 0;

    questions!.forEach((question: QuestionType) => {
      const correctAnswer = question.answers.filter((answer) => answer.isCorrect)[0].value;

      if (question.checkedAnswer === correctAnswer) {
        correct++;
      }
    });

    return correct;
  };

  return (
    <>
      {questions && questions.map((question, i) => <Question question={question} key={i} />)}

      <Center m={'10'}>
        <Button size='lg' onClick={() => postScore()} isLoading={isLoading}>
          Wyślij
        </Button>
      </Center>
    </>
  );
};
