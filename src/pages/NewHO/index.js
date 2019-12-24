import React from 'react';

import Header from '~/components/Header';

import { Container, SendOrderButton, Input } from './styles';

export default function NewHO() {
  return (
    <Container>
      <Input
        multiline
        textAlignVertical="top"
        placeholder="Inclua seu pedido de auxílio"
      />
      <SendOrderButton>Enviar Pedido</SendOrderButton>
    </Container>
  );
}

NewHO.navigationOptions = {
  headerTitle: <Header />,
};
