import React from "react";
import styled from "styled-components";
import { StageType } from "../Stages/stages";

const StyledContinue = styled.div`
  width: 100%;
`;

const Button = styled.button``;

type Props = {
  stageType: StageType;
};

const Continue = (props: Props) => {
  return (
    <StyledContinue>
      <Button>Continue</Button>
    </StyledContinue>
  );
};

export default Continue;
