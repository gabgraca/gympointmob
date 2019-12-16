/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  SubmitButton,
  CheckInsList,
  CheckInItem,
  Item,
  Description,
} from './styles';
import Header from '~/components/Header';

export default function CheckIns() {
  const checkins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  function handlePress() {}
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={handlePress}>Novo check-in</SubmitButton>

        <CheckInsList
          data={checkins}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <CheckInItem>
              <Item>{`Check-in #${item}`}</Item>
              <Description>Hoje às 14h</Description>
            </CheckInItem>
          )}
        />
      </Container>
    </>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
