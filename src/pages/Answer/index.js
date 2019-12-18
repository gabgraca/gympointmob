import React from 'react';
import { Text } from 'react-native';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Answer() {
  return <Text>Answer Page</Text>;
}

Answer.navigationOptions = {
  headerTitle: <Header />,
};
