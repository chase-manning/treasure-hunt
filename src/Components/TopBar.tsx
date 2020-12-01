import React from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import ProgressBar from "./ProgressBar";
import Hints from "./Hints";

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  stage: Stage;
  percentComplete: number;
  useHint: () => void;
  hints: number;
};

const TopBar = (props: Props) => {
  const hint = () => {
    switch (props.stage.type) {
      case StageType.AUDIO:
        return props.stage.audio!.hint;
      case StageType.RIDDLE:
        return props.stage.riddle!.hint;
      case StageType.PHOTO:
        return props.stage.audio!.hint;
      default:
        return "";
    }
  };

  return (
    <StyledTopBar>
      <ProgressBar percentComplete={props.percentComplete} />
      {props.stage.type !== StageType.CHALLENGE && (
        <Hints
          hint={hint()}
          useHint={() => props.useHint()}
          hints={props.hints}
        />
      )}
    </StyledTopBar>
  );
};

export default TopBar;
