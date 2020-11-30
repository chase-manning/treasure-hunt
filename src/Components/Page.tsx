import React from "react";
import styled from "styled-components";
import { Stage } from "../Stages/stages";
import Continue from "./Continue";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <Continue
        stageType={props.stage.type}
        nextPage={() => props.nextPage()}
      />
    </StyledPage>
  );
};

export default Page;
