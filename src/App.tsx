import React from 'react';
import { StatusBar } from 'react-native';

import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
