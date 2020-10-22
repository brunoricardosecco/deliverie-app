import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CompanyProvider } from '../hooks/CompanyContext';
import ListCompanies from '../pages/ListCompanies';
import ProductStack from './ProductStack';

const Company = createStackNavigator();

const CompaniesStack: React.FC = () => {
  return (
    <Company.Navigator>
      <Company.Screen
        name="ListCompanies"
        component={ListCompanies}
        options={{ headerShown: false }}
      />
      <Company.Screen
        name="ListProducts"
        component={ProductStack}
        options={{ headerShown: false }}
      />
    </Company.Navigator>
  );
};

export default CompaniesStack;
