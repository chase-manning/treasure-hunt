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
  return (
    <StyledTopBar>
      <ProgressBar percentComplete={props.percentComplete} />
      {props.stage.type === StageType.AUDIO && (
        <Hints
          hint={props.stage.audio!.hint}
          useHint={() => props.useHint()}
          hints={props.hints}
        />
      )}
      {props.stage.type === StageType.RIDDLE && (
        <Hints
          hint={props.stage.riddle!.hint}
          useHint={() => props.useHint()}
          hints={props.hints}
        />
      )}
      {props.stage.type === StageType.PHOTO && (
        <Hints
          hint={props.stage.photo!.hint}
          useHint={() => props.useHint()}
          hints={props.hints}
        />
      )}
    </StyledTopBar>
  );
};

export default TopBar;
