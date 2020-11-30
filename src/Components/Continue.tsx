import React, { useState } from "react";
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
  nextPage: () => void;
};

const Continue = (props: Props) => {
  const [code, setCode] = useState("");

  return (
    <StyledContinue>
      {props.stageType === StageType.CHALLENGE ? (
        <Button onClick={() => props.nextPage()}>Complete</Button>
      ) : (
        <Button onClick={() => props.nextPage()}>Continue</Button>
      )}
    </StyledContinue>
  );
};

export default Continue;
