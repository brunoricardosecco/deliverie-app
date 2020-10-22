import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppProvider from '../hooks';
import { createStackNavigator } from '@react-navigation/stack';

import CompaniesStack from './CompaniesStack';
import ProductStack from './ProductStack';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AuthStack}
        name="Auth"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CompaniesStack}
        name="ListCompanies"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={ProductStack}
        name="ListProducts"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
