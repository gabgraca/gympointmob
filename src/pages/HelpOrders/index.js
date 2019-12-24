/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';
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

function HelpOrders({ navigation }) {
  const id = useSelector(state => state.auth.id);
  const [helpOrders, setHelpOrders] = useState([]);
  const focus = navigation.isFocused();
  async function loadHelpOrders() {
    const response = await api.get(`/students/${id}/help-orders`);
    const dados = response.data.map(data => {
      return {
        id: data.id,
        status: data.answer_at ? true : null,
        date: formatRelative(parseISO(data.updatedAt), new Date(), {
          locale: pt,
        }),
        question: data.question,
        answer: data.answer,
      };
    });

    setHelpOrders(dados);
  }
  useEffect(() => {
    if (focus) {
      loadHelpOrders();
    }
  }, [focus]); // eslint-disable-line

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
            <HelpOrderBlock
              onPress={() => navigation.navigate('Answer', { answer: item })}
            >
              <HelpOrderHeader>
                <AnswerStatus status={item.status}>
                  {item.status ? 'Respondido' : 'Sem Resposta'}
                </AnswerStatus>
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

export default withNavigationFocus(HelpOrders);
