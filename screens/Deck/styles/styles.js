import styled from 'styled-components';
import { FullWidthContainer } from '../../../styles/shared';

export const DeckButtonContainer = styled(FullWidthContainer)`
  margin-top: 20px;
`;

export const DeckContainer = styled.View`
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 2px ${(props) => props.theme.shadowColorWhite};
  flex: 3;
`;
