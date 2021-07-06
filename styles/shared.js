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

export const StyledTextInput = styled.TextInput`
  align-items: stretch;
  height: 40px;
  border-width: 1px;
`;

export const MainTitle = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: 'HelveticaNeue-Bold';
  color: #e8e8e8;
  margin-bottom: 40px;
`;

export const Card = styled.View`
  border: 1px solid green;
  padding: 30px;
  border-radius: 12px;
  height: 450px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardDeck = styled.View`
  background-color: #e8e8e8;
  padding: 30px;
  border-radius: 12px;
  /* height: 450px; */
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.34);
`;

export const DeckHeader = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 28px;
  color: #da0037;
  margin-bottom: 20px;
`;

export const ThinText = styled.Text`
  font-family: 'HelveticaNeue-Thin';
  font-size: 16px;
  color: #222831;
`;
