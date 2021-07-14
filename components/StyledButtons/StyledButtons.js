import React from 'react';
import { LightText, DarkThinText } from '../../styles/shared';
import {
  TouchableOpacityGreen,
  TouchableOpacityRed,
  TextTouchableOpacity,
  FilledTouchableOpacity,
  OutlinedTouchableOpacity,
} from './styles/styles';

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

export function TextButton({ children, onPress, ...props }) {
  return (
    <TextTouchableOpacity onPress={onPress} {...props}>
      <DarkThinText>{children}</DarkThinText>
    </TextTouchableOpacity>
  );
}
