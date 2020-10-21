import React from 'react';

import { AuthProvider } from './AuthContext';
import { CompanyProvider } from './CompanyContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CompanyProvider>{children}</CompanyProvider>
  </AuthProvider>
);

export default AppProvider;
