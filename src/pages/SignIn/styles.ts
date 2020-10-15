import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, metrics } from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
  padding: 0 ${metrics.padding}px;
`;

export const Logo = styled.Text`
  font-size: ${wp(10)}px;
  color: ${colors.white};
`;
