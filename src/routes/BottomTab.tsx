import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAuth } from '../hooks/AuthContext';

import ListCompanies from '../pages/ListCompanies';
import ListOrders from '../pages/ListOrders';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  const { user } = useAuth();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={ListCompanies} />
      <Tab.Screen name="Pedidos" component={ListOrders} />
      <Tab.Screen name="Configurações" component={ListCompanies} />
      <Tab.Screen name={user.email} component={ListCompanies} />
    </Tab.Navigator>
  );
};

export default MyTabs;
