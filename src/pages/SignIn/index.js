import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, SubmitButton, Input, Text } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email));
  }
  return (
    <Container>
      <Form>
        <Image source={logo} />
        <Text>GYMPOINT</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Informe seu email de cadastro"
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
