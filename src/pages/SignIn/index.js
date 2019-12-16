import React from 'react';
import { Image } from 'react-native';
import { Container, Form, SubmitButton, Input, Text } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit() {}
  return (
    <Container>
      <Form>
        <Image source={logo} />
        <Text>GYMPOINT</Text>
        <Input placeholder="Informe seu ID de cadastro" />
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
