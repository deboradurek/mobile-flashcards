import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
`;
