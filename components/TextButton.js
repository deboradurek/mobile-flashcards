import React from 'react';
import { DarkThinText, TextTouchableOpacity } from '../styles/shared';

function TextButton({ children, onPress, ...props }) {
  return (
    <TextTouchableOpacity onPress={onPress} {...props}>
      <DarkThinText>{children}</DarkThinText>
    </TextTouchableOpacity>
  );
}
export default TextButton;
