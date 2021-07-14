import styled from 'styled-components';

export const StyledProgressBar = styled.View`
  background-color: ${(props) => props.theme.shadowColorGray};
  border-radius: 12px;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
`;

export const CardScore = styled.View`
  background-color: ${(props) => props.theme.lightGray};
  padding: 15px;
  margin: 25px 0;
  border-radius: 12px;
  box-shadow: 0px 0px 2px ${(props) => props.theme.shadowColorWhite};
  height: 250px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextScore = styled.Text`
  font-family: 'HelveticaNeue-Bold';
  font-size: 90px;
  color: ${(props) => props.theme.pink};
`;

export const QAButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ScoreButtonContainer = styled.View`
  margin-top: 50px;
`;
