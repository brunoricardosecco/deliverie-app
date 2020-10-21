import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';

const AppContainer: React.FC = props => {
  return (
    <AppProvider {...props}>
      <Routes {...props} />
    </AppProvider>
  );
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={AppContainer}
            name="Root"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
