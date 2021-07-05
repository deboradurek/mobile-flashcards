import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CustomButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
export default CustomButton;
