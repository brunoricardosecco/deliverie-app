import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductProvider } from '../hooks/ProductsContext';
import ListProducts from '../pages/ListProducts';

const Product = createStackNavigator();

const ProductStack: React.FC = props => {
  return (
    <ProductProvider>
      <Product.Navigator>
        <Product.Screen
          name="ListProducts"
          component={ListProducts}
          options={{ headerShown: false }}
        />
      </Product.Navigator>
    </ProductProvider>
  );
};

export default ProductStack;
