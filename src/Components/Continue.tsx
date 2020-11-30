import React, { useState } from "react";
import styled from "styled-components";
import { StageType } from "../Stages/stages";
import Button from "../styles/Button";

const StyledContinue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RiddleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: solid 1px var(--sub);
  border-radius: 5px;
  margin-bottom: 20px;
`;

type Props = {
  stageType: StageType;
  code?: string;
  nextPage: () => void;
};

const Continue = (props: Props) => {
  const [code, setCode] = useState("");

  const checkCode = () => {
    if (code === props.code) props.nextPage();
  };

  return (
    <StyledContinue>
      {props.stageType === StageType.RIDDLE ? (
        <RiddleSection>
          <Input></Input>
          <Button onClick={() => props.nextPage()}>Continue</Button>
        </RiddleSection>
      ) : (
        <Button onClick={() => props.nextPage()}>Complete</Button>
      )}
    </StyledContinue>
  );
};

export default Continue;
