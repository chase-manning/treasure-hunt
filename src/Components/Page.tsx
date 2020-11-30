import React from "react";
import styled from "styled-components";
import { Stage, StageType } from "../Stages/stages";
import Continue from "./Continue";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const Header = styled.div`
  font-size: 26px;
`;

type Props = {
  stage: Stage;
  active: boolean;
  nextPage: () => void;
};

const Page = (props: Props) => {
  if (!props.active) return null;

  return (
    <StyledPage>
      <Header>
        {props.stage.type === StageType.CHALLENGE
          ? props.stage.challenge?.task
          : props.stage.riddle?.clue}
      </Header>
      <Continue stage={props.stage} nextPage={() => props.nextPage()} />
    </StyledPage>
  );
};

export default Page;
