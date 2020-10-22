import React from 'react';

import { AuthProvider } from './AuthContext';
import { CompanyProvider } from './CompanyContext';
import { OrderProvider } from './OrdersContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CompanyProvider>
      <OrderProvider>{children}</OrderProvider>
    </CompanyProvider>
  </AuthProvider>
);

export default AppProvider;
