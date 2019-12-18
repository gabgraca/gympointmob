/* eslint-disable react/prop-types */
import React from 'react';

import Header from '~/components/Header';
import {
  Container,
  NewHOButton,
  HelpOrdersList,
  HelpOrderBlock,
  HelpOrderHeader,
  AnswerStatus,
  AnswerDate,
  Question,
} from './styles';

export default function HelpOrders({ navigation }) {
  const helpOrders = [
    {
      id: '1',
      status: 'Sem Resposta',
      date: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordade devo ngerir batata doce e frango logo de primeira com um monte de coisa tipo salsicha e pao de amburguer',
    },
    {
      id: '2',
      status: 'Respondido',
      date: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordade devo ngerir batata doce e frango logo de primeira com um monte de coisa tipo salsicha e pao de amburguer',
    },
    {
      id: '3',
      status: 'Sem Resposta',
      date: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordade devo ngerir batata doce e frango logo de primeira com um monte de coisa tipo salsicha e pao de amburguer',
    },

    {
      id: '4',
      status: 'Sem Resposta',
      date: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordade devo ngerir batata doce e frango logo de primeira com um monte de coisa tipo salsicha e pao de amburguer',
    },

    {
      id: '5',
      status: 'Sem Resposta',
      date: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordade devo ngerir batata doce e frango logo de primeira com um monte de coisa tipo salsicha e pao de amburguer',
    },
  ];
  return (
    <>
      <Container>
        <NewHOButton onPress={() => navigation.navigate('NewHO')}>
          Novo pedido de auxílio
        </NewHOButton>
        <HelpOrdersList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <HelpOrderBlock onPress={() => navigation.navigate('Answer')}>
              <HelpOrderHeader>
                <AnswerStatus>{item.status}</AnswerStatus>
                <AnswerDate>{item.date}</AnswerDate>
              </HelpOrderHeader>
              <Question>{item.question}</Question>
            </HelpOrderBlock>
          )}
        />
      </Container>
    </>
  );
}
HelpOrders.navigationOptions = {
  headerTitle: <Header />,
};
