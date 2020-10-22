import React, { createContext, useCallback, useContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import { signIn as signInService } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

interface User {
  id: number;
  email: string;
  name: string;
  cpf: string;
  phone_ddd: string;
  phone_number: string;
  profile_image_id: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const signIn = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const response = await signInService({ email, password });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@Delivery:token', token],
        ['@Delivery:user', JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
      navigation.navigate('ListCompanies');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth, SignInCredentials };
