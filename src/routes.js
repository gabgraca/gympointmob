/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';
import HelpOrders from '~/pages/HelpOrders';
import Answer from '~/pages/Answer';
import NewHO from '~/pages/NewHO';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIns,
            Help: {
              screen: createStackNavigator({
                HelpOrders,
                Answer,
                NewHO,
              }),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              activeTintColor: '#ee4d64',
              labelStyle: {
                fontSize: 16,
              },
              style: {
                height: 70,
                padding: 15,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
