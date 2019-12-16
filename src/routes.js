import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';
import HelpOrders from '~/pages/HelpOrders';

export default createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
      }),
      App: createBottomTabNavigator(
        {
          CheckIns,
          HelpOrders,
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
      initialRouteName: 'App',
    }
  )
);
