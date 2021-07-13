import React from 'react';
import { LightText } from '../../../styles/shared';
import { StyledProgressBar } from '../styles/styles';

function ProgressBar(props) {
  const { message } = props;

  return (
    <StyledProgressBar>
      <LightText>{message}</LightText>
    </StyledProgressBar>
  );
}

export default ProgressBar;
