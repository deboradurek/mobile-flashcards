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
  background-color: #e8e8e8;
  padding: 15px;
  margin: 25px 0;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.34);
  height: 250px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const QAHeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #da0037;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
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

export const TextScore = styled.Text`
  font-family: 'HelveticaNeue-Bold';
  font-size: 90px;
  color: #da0037;
`;

export const QAButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ScoreButtonContainer = styled.View`
  margin-top: 50px;
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
