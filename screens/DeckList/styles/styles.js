import styled from 'styled-components';

export const SmallCardContainer = styled.View`
  background-color: ${(props) => props.theme.lightGray};
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 2px ${(props) => props.theme.shadowColorWhite};
  margin-bottom: 20px;
`;

export const ContainerFlatlist = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 20px 20px;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const DeckListTitle = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: 'HelveticaNeue-Bold';
  color: ${(props) => props.theme.lightGray};
`;
