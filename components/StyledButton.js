import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FilledTouchableOpacity } from '../styles/shared';

function StyledButton({ children, onPress, ...props }) {
  return (
    <FilledTouchableOpacity onPress={onPress} {...props}>
      <Text>{children}</Text>
    </FilledTouchableOpacity>
  );
}
export default StyledButton;
