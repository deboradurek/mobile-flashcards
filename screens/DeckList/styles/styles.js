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
