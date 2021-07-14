import { DefaultTheme } from '@react-navigation/native';

export const styledTheme = {
  darkGray: '#222831',
  mediumGray: '#393E46',
  lightGray: '#E8E8E8',
  pink: '#DA0037',
  orange: '#F96D00',
  inactiveTintColorTab: '#6b6b6b',
  shadowColorWhite: 'rgba(255, 255, 255, 0.34)',
  shadowColorGray: 'rgba(232, 232, 232, 0.2)',
  okGreen: '#209f21',
  nonOkRed: '#e82222',
};

export const darkGray = '#222831';

export const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#393E46',
  },
};
