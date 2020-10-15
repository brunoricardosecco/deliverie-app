import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import { Container, Logo } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header />
      <Logo>Deliverie</Logo>
    </Container>
  );
};

export default SignIn;
