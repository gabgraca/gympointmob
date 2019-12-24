/* eslint-disable react/prop-types */
import React from 'react';
import Header from '~/components/Header';
import {
  Container,
  AnswerBlock,
  AnswerHeader,
  Text,
  Date,
  Question,
  AnswerText,
} from './styles';

export default function Answer({ navigation }) {
  const answer = navigation.getParam('answer');
  return (
    <Container>
      <AnswerBlock>
        <AnswerHeader>
          <Text>PERGUNTA</Text>
          <Date>{answer.date}</Date>
        </AnswerHeader>
        <Question>{answer.question}</Question>
        <Text>RESPOSTA</Text>
        <AnswerText>{answer.answer}</AnswerText>
      </AnswerBlock>
    </Container>
  );
}

Answer.navigationOptions = {
  headerTitle: <Header />,
};
