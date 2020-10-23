import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAuth } from '../hooks/AuthContext';

import CompaniesStack from './CompaniesStack';
import ListOrders from '../pages/ListOrders';
import { colors } from '../constants';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import SignIn from '../pages/SignIn';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = ({ navigation }) => {
  const { user, signOut } = useAuth();

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: { backgroundColor: '#212121' },
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Início"
        component={CompaniesStack}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" type="feather" color="#bbb" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={ListOrders}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="package" type="feather" color="#bbb" size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Logout"
        key="logout"
        component={() => <View />}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="log-out" type="feather" color="#bbb" size={20} />
          ),
        }}
        listeners={() => ({
          tabPress: ({ route }) => {
            signOut();
            navigation.navigate('Auth');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
