import styled from 'styled-components';

export const StyledProgressBar = styled.View`
  background-color: rgba(232, 232, 232, 0.2);
  border-radius: 12px;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
`;

export const CardScore = styled.View`
  border: 1px solid green;
  padding: 30px;
  border-radius: 12px;
  height: 210px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const QAHeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #da0037;
  width: 90%;
  align-items: center;
  padding-bottom: 15px;
  background-color: #e8e8e8;
`;

export const QAHeader = styled.Text`
  color: #da0037;
  font-weight: bold;
`;

export const QAText = styled.Text`
  font-family: 'HelveticaNeue-Medium';
  font-size: 30px;
  text-align: center;
`;

export const QAButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TouchableOpacityGreen = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: #209f21;
  border-radius: 12px;
`;

export const TouchableOpacityRed = styled.TouchableOpacity`
  padding: 20px 70px;
  margin: 40px 0;
  background-color: #e82222;
  border-radius: 12px;
`;
