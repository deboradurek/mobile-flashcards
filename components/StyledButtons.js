import React from 'react';
import { TouchableOpacityGreen, TouchableOpacityRed } from '../screens/Quiz/styles/styles';
import { FilledTouchableOpacity, LightText, OutlinedTouchableOpacity } from '../styles/shared';

export function FilledButton({ children, onPress, ...props }) {
  return (
    <FilledTouchableOpacity onPress={onPress} {...props}>
      <LightText>{children}</LightText>
    </FilledTouchableOpacity>
  );
}

export function OutlinedButton({ children, onPress, ...props }) {
  return (
    <OutlinedTouchableOpacity onPress={onPress} {...props}>
      <LightText>{children}</LightText>
    </OutlinedTouchableOpacity>
  );
}

export function QuizButtonGreen({ children, onPress, ...props }) {
  return (
    <TouchableOpacityGreen onPress={onPress} {...props}>
      <LightText>{children}</LightText>
    </TouchableOpacityGreen>
  );
}

export function QuizButtonRed({ children, onPress, ...props }) {
  return (
    <TouchableOpacityRed onPress={onPress} {...props}>
      <LightText>{children}</LightText>
    </TouchableOpacityRed>
  );
}
