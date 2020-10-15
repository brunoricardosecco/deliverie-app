import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './Auth';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
