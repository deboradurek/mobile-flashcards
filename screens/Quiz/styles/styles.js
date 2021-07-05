import styled from 'styled-components';

export const ProgressBar = styled.View`
  border: 1px solid green;
  border-radius: 15px;
  align-items: center;
  width: 100%;
  padding: 8px 5px;
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

export const QAHeaderView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #999;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
`;

export const QAHeader = styled.Text`
  color: #da0037;
  font-weight: bold;
`;

export const QAText = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const QAButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
