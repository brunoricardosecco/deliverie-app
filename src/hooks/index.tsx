import React from 'react';

import { AuthProvider } from './AuthContext';
import { CompanyProvider } from './CompanyContext';
import { OrderProvider } from './OrdersContext';
import { ProductProvider } from './ProductsContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CompanyProvider>
      <OrderProvider>
        <ProductProvider>{children}</ProductProvider>
      </OrderProvider>
    </CompanyProvider>
  </AuthProvider>
);

export default AppProvider;
