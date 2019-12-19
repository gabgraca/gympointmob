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

export default function Answer() {
  return (
    <Container>
      <AnswerBlock>
        <AnswerHeader>
          <Text>PERGUNTA</Text>
          <Date>Hoje às 14h</Date>
        </AnswerHeader>
        <Question>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </Question>
        <Text>RESPOSTA</Text>
        <AnswerText>
          Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro
          treina como um, come como dois.
        </AnswerText>
      </AnswerBlock>
    </Container>
  );
}

Answer.navigationOptions = {
  headerTitle: <Header />,
};
