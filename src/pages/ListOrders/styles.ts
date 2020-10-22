import React from 'react';
import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { colors } from '../../constants';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.primaryDark};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;

export const OrderName = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

export const OrderDelivery = styled.Text`
  text-align: center;
  color: #ffffffe2;
  font-size: 12px;
  align-self: flex-end;
`;

export const OrderImage = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #ffffff03;
`;

export const OrderContainer = styled.View`
  padding: 10px;
  background-color: #212121;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
