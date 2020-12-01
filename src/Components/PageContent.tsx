import React from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import Button from "../styles/Button";

const StyledPageContent = styled.div`
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
};

const PageContent = (props: Props) => {
  return (
    <StyledPageContent>
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
    </StyledPageContent>
  );
};

export default PageContent;
