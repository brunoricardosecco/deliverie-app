import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CompanyProvider } from '../hooks/CompanyContext';
import ListCompanies from '../pages/ListCompanies';

const Company = createStackNavigator();

const CompaniesStack: React.FC = () => {
  return (
    <CompanyProvider>
      <Company.Navigator>
        <Company.Screen
          name="ListCompanies"
          component={ListCompanies}
          options={{ headerShown: false }}
        />
      </Company.Navigator>
    </CompanyProvider>
  );
};

export default CompaniesStack;
