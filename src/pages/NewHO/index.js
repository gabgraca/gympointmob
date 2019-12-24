import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';

import { Container, SendOrderButton, Input } from './styles';

export default function NewHO() {
  const id = useSelector(state => state.auth.id);
  const [question, setQuestion] = useState('');
  async function handleEnviar() {
    try {
      await api.post(`/students/${id}/help-orders`, {
        question,
      });
      Alert.alert('Pedido enviado com sucesso');
      setQuestion('');
    } catch (error) {
      Alert.alert('Erro ao enviar pedido');
    }
  }
  return (
    <Container>
      <Input
        multiline
        textAlignVertical="top"
        placeholder="Inclua seu pedido de auxílio"
        value={question}
        onChangeText={setQuestion}
      />
      <SendOrderButton onPress={handleEnviar}>Enviar Pedido</SendOrderButton>
    </Container>
  );
}

NewHO.navigationOptions = {
  headerTitle: <Header />,
};
