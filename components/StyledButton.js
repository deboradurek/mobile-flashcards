import React from 'react';
import { FilledTouchableOpacity, LightText } from '../styles/shared';

function StyledButton({ children, onPress, ...props }) {
  return (
    <FilledTouchableOpacity onPress={onPress} {...props}>
      <LightText>{children}</LightText>
    </FilledTouchableOpacity>
  );
}
export default StyledButton;
