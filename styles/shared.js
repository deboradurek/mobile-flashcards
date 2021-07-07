import styled from 'styled-components';

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

export const StyledButtonContainer = styled(FullWidthContainer)`
  margin-top: 20px;
`;

export const InputContainer = styled(FullWidthContainer)`
  margin-top: 40px;
`;

export const SmallCardContainer = styled.View`
  background-color: #e8e8e8;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.34);
  margin-bottom: 20px;
`;

export const LargeCardContainer = styled.View`
  background-color: #e8e8e8;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.34);
  margin-bottom: 20px;
  min-height: 350px;
  flex: 1;
`;

export const DeckContainer = styled(LargeCardContainer)`
  justify-content: center;
`;

export const TextCardDeck = styled.View`
  align-items: center;
  width: 100%;
  padding: 15px;
`;

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

export const DeckHeader = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 28px;
  color: #da0037;
  margin-bottom: 20px;
`;

export const DarkThinText = styled.Text`
  font-family: 'HelveticaNeue-Thin';
  font-size: 16px;
  color: #222831;
`;

export const TextTouchableOpacity = styled.TouchableOpacity`
  padding: 15px;
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
