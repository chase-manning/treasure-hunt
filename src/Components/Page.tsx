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
};

const Page = (props: Props) => {
  return (
    <StyledPage>
      <Continue stageType={props.stage.type} />
    </StyledPage>
  );
};

export default Page;
