import styled, { css } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 30px;
`;

export const CenterContainer = styled.View`
  width: 100%;
  justify-content: center;
`;

export const FullWidthContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const DeckContainer = styled(FullWidthContainer)`
  margin-top: 60px;
`;

export const InputContainer = styled(FullWidthContainer)`
  margin-top: 40px;
`;

export const CardDeckContainer = styled.View`
  align-items: center;
  width: 100%;
  padding: 50px 30px;
`;

// export const Container = styled(SafeAreaView)`
//   width: 100%;
// `;

export const StyledTextInput = styled.TextInput`
  align-items: stretch;
  border-radius: 8px;
  border-width: 1px;
  background-color: #e8e8e8;
  padding: 48px 15px;
  margin-bottom: 60px;
  font-family: 'HelveticaNeue-Medium';
  font-size: 20px;
  color: #da0037;
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
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.34);
  margin-bottom: 20px;
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

export const FilledTouchableOpacity = styled.TouchableOpacity`
  background-color: #f96d00;
  align-items: stretch;
  padding: 15px;
  margin-top: 18px;
  border-radius: 8px;
  align-items: center;
`;

export const LightText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 16px;
  color: #e8e8e8;
`;
