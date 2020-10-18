import React from 'react';
import { ButtonProps, Button } from 'react-native-elements';
import { colors } from '../../constants';
import styles from './styles';

const CustomButton: React.FC<ButtonProps> = props => {
  return (
    <Button
      containerStyle={{ width: '100%' }}
      buttonStyle={styles.container}
      {...props}
    />
  );
};

export default CustomButton;
