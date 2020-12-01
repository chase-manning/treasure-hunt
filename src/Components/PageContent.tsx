import React from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import Button from "../styles/Button";

const StyledPageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Challenge = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  font-size: 26px;
  text-align: center;
  line-height: 1.3;
  color: var(--main);
`;

const SubHeader = styled.div`
  font-size: 16px;
  text-align: center;
  color: var(--sub);
  margin-top: 20px;
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
  const challenge = () => (
    <Challenge>
      <Header>{props.stage.challenge?.task}</Header>
      <SubHeader>
        {props.stage.challenge?.group
          ? "Everyone on team must complete"
          : "Nominate someone to complete"}
      </SubHeader>
    </Challenge>
  );
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
