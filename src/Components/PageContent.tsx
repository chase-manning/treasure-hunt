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
  const image = () => <Image src={props.stage.photo?.image}></Image>;
  const audio = () => (
    <Button sub={true} onClick={() => props.stage.audio?.sound.play()}>
      Play
    </Button>
  );
  const challenge = () => <Header>{props.stage.challenge?.task}</Header>;
  const riddle = () => <Header>{props.stage.riddle?.clue}</Header>;

  const content = () => {
    switch (props.stage.type) {
      case StageType.PHOTO:
        return image();
      case StageType.AUDIO:
        return audio();
      case StageType.CHALLENGE:
        return challenge();
      case StageType.RIDDLE:
        return riddle();
    }
  };

  return <StyledPageContent>{content()}</StyledPageContent>;
};

export default PageContent;
