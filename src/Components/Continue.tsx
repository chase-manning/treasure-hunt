import React from "react";
import styled from "styled-components";
import { StageType } from "../Stages/stages";

const StyledContinue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: var(--light);
  padding: 20px 40px;
  background-color: var(--primary);
  border-radius: 10px;
`;

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
