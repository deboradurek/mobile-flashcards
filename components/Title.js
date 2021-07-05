import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { lightGray } from '../utils/colors';

function Title({ children }) {
  return (
    <View>
      <MainTitle>{children}</MainTitle>
    </View>
  );
}

export default Title;

const MainTitle = styled.Text`
  /* margin-top: 100px; */
  font-size: 35px;
  /* color: ${lightGray}; */
`;
