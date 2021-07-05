import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function FilledTouchableOpacity({ children, onPress, ...props }) {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
export default FilledTouchableOpacity;
