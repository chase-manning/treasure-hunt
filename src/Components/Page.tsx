import React from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import Button from "../styles/Button";
import Continue from "./Continue";
import ProgressBar from "./ProgressBar";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const Image = styled.img`
  width: 80%;
`;

const Header = styled.div`
  font-size: 26px;
  text-align: center;
  line-height: 1.3;
`;

type Props = {
  stage: Stage;
  active: boolean;
  nextPage: () => void;
  percentComplete: number;
};

const Page = (props: Props) => {
  if (!props.active) return null;

  return (
    <StyledPage>
      <ProgressBar percentComplete={props.percentComplete} />
      {props.stage.type === StageType.PHOTO ? (
        <Image src={props.stage.photo?.image}></Image>
      ) : props.stage.type === StageType.AUDIO ? (
        <Button sub={true} onClick={() => props.stage.audio?.sound.play()}>
          Play
        </Button>
      ) : (
        <Header>
          {props.stage.type === StageType.CHALLENGE
            ? props.stage.challenge?.task
            : props.stage.riddle?.clue}
        </Header>
      )}
      <Continue stage={props.stage} nextPage={() => props.nextPage()} />
    </StyledPage>
  );
};

export default Page;
