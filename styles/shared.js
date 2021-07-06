import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const CenterContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
`;

export const MainTitle = styled.Text`
  font-size: 35px;
  text-align: center;
`;

export const StyledTextInput = styled.TextInput`
  align-items: stretch;
  height: 40px;
  border-width: 1px;
`;
