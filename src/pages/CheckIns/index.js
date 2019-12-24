/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Alert } from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';
import {
  Container,
  SubmitButton,
  CheckInsList,
  CheckInItem,
  Item,
  Description,
} from './styles';

export default function CheckIns() {
  const [checkins, setCheckins] = useState([]);
  const id = useSelector(state => state.auth.id);
  async function loadCheckins() {
    const response = await api.get(`/students/${id}/checkins`);
    const dataFormating = response.data.map(data => {
      const dataForm = formatRelative(parseISO(data.createdAt), new Date(), {
        locale: pt,
      });
      return {
        id: data.id,
        dataFormatted: dataForm,
      };
    });
    setCheckins(dataFormating);
  }
  useEffect(() => {
    loadCheckins();
  }, []); // eslint-disable-line
  async function handlePress() {
    try {
      await api.post(`/students/${id}/checkins`);
      loadCheckins();
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Erro no checkin');
    }
  }
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={handlePress}>Novo check-in</SubmitButton>

        <CheckInsList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CheckInItem>
              <Item>{`Check-in #${item.id}`}</Item>
              <Description>{item.dataFormatted}</Description>
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
