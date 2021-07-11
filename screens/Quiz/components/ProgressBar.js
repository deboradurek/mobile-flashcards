import React from 'react';
import { LightText } from '../../../styles/shared';
import { StyledProgressBar } from '../styles/styles';

function ProgressBar(props) {
  const { answeredCards, totalCards } = props;

  return (
    <StyledProgressBar>
      <LightText>
        {answeredCards} / {totalCards}
      </LightText>
    </StyledProgressBar>
  );
}

export default ProgressBar;
