import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAuth } from '../hooks/AuthContext';

import CompaniesStack from './CompaniesStack';
import ListOrders from '../pages/ListOrders';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  const { user } = useAuth();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={CompaniesStack} />
      <Tab.Screen name="Pedidos" component={ListOrders} />
      <Tab.Screen name="Configurações" component={CompaniesStack} />
      <Tab.Screen name="anitto" component={CompaniesStack} />
    </Tab.Navigator>
  );
};

export default MyTabs;
